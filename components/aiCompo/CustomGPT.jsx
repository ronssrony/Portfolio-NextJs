"use client";
import prompt from "./prompt";
import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrewrittenQuestions, setShowPrewrittenQuestions] = useState(true);

  const prewrittenQuestions = [
    "Tell me about yourself",
    "Do you know about pool connections?",
    "Tell me about cursors in databases",
  ];
  
  const client = new HfInference("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");

  const sendMessage = async (input) => {
    if (!input.trim()) return;

    setShowPrewrittenQuestions(false);

    const visibleUserMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, visibleUserMessage]);

    setUserInput("");
    setIsLoading(true);

    try {
      const hiddenMessages = [
        ...messages,
        { role: "system", content: prompt },
        { role: "user", content: input },
      ];

      const response = await client.chatCompletion({
        model: "Qwen/Qwen2.5-Coder-32B-Instruct",
        messages: hiddenMessages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        max_tokens: 500,
      });

      const botMessage = {
        role: "assistant",
        content: response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "An error occurred. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      sendMessage(userInput);
    }
  };

  

  return (
    <div className="h-[90vh] w-[90vw] max-w-[600px] mx-auto flex flex-col  rounded-lg bg-transparent">
      {/* Header Section */}
      <div className="flex flex-col items-center border-b border-gray-700 py-4">
        <img
          src="/cvphoto.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h3 className="text-lg font-semibold text-white">Md Abdullah AL Mamun</h3>
        <div className="flex items-center text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>Available to work</span>
        </div>
      </div>

      {/* Prewritten Questions */}
      {showPrewrittenQuestions && (
        <div className="flex flex-wrap gap-3 p-4 justify-center">
          {prewrittenQuestions.map((question, index) => (
            <button
              key={index}
              className="px-3 py-2 bg-slate-300 text-black rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => sendMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>
      )}

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 text-black">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              msg.role === "user" ? "bg-slate-300 text-right" : "bg-white"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="italic text-gray-400">...</div>}
      </div>

      {/* Input Section */}
      <div className="flex items-center gap-2 p-4 border-t border-gray-700">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Anything About Myself . . ."
          className="flex-1 p-2 rounded-lg border border-slate-700 bg-gray-800 text-white focus:outline-none"
        />
        <button
          onClick={() => sendMessage(userInput)}
          disabled={isLoading}
          className="px-4 py-2 bg-slate-200 text-black rounded-lg hover:bg-slate-50 disabled:bg-gray-600"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
