import { useState, useEffect } from "react";
import { MdMicNone } from "react-icons/md";

const API_ENDPOINT = "http://localhost:5000/api/process-voice"; // Change this to your backend URL

function Mic({ setConversation }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    initializeRecognition();
  }, []);

  const initializeRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = false;

      recognitionInstance.onresult = async (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setConversation((prev) => [...prev, { type: "user", text: transcript }]);
        
        // AI Acknowledges Processing
        speakText("Let me process it...");
        
        // Send to Backend and Get Response
        const responseText = await processVoice(transcript);
        
        // AI Responds
        speakText(responseText);
      };

      setRecognition(recognitionInstance);
    } else {
      alert("Speech Recognition is not supported in this browser.");
    }
  };

  const startConversation = async () => {
    setIsRecording(true);
    
    // Greeting and Prompt to Speak
    speakText("Hello! How can I help you today? Please say something.");
    
    // Start Recording
    recognition.start();
  };

  const stopConversation = () => {
    setIsRecording(false);
    recognition.stop();
  };

  const processVoice = async (userText) => {
    // Dummy Responses
    const dummyResponses = [
      "Sure, let me help you with that.",
      "That's interesting! Let me think about it.",
      "I see. I'll get the answer for you.",
      "Alright, processing your request...",
      "Good question! Let me check that for you.",
      "I'm on it. Just a moment...",
    ];

    // Randomly select a dummy response
    const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];

    // Uncomment this section to use the real backend
    // try {
    //   const response = await fetch(API_ENDPOINT, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ text: userText }),
    //   });
    //   const data = await response.json();
    //   setConversation((prev) => [...prev, { type: "bot", text: data.response }]);
    //   return data.response;
    // } catch (error) {
    //   console.error("Error processing voice:", error);
    //   return "Sorry, something went wrong.";
    // }

    // Using Dummy Response for Testing
    setConversation((prev) => [...prev, { type: "bot", text: randomResponse }]);
    return randomResponse;
  };

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.onend = () => {
      if (isRecording) {
        recognition.start();
      }
    };
    synth.speak(utterance);
  };

  return (
    <button
      className={`rounded-full p-6 shadow-lg transition-transform duration-300 ${
        isRecording
          ? "bg-red-500 hover:scale-110"
          : "bg-green-600 hover:scale-105"
      }`}
      onClick={isRecording ? stopConversation : startConversation}
    >
      <MdMicNone className="text-white text-5xl" />
    </button>
  );
}

export default Mic;
