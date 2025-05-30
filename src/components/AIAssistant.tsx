import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotRules } from "@/utils/chatbotRules";

interface Message {
  id: number;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: chatbotRules.getGreeting(),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Get bot response using rules
    setTimeout(() => {
      const botResponse = chatbotRules.processMessage(input);
      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {/* Floating button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
            isOpen ? "bg-rose-600" : "bg-rose-500"
          } hover:scale-105 transition-all hover:bg-rose-600`}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageSquare className="h-6 w-6 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 sm:right-0 md:right-6 z-50 p-2 sm:p-0 w-full max-w-[400px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring" }}
          >
            <Card className="border border-rose-200/20 overflow-hidden shadow-2xl bg-white/95 backdrop-blur-md">
              <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-600 border-b border-rose-200/20 py-4">
                <CardTitle className="flex items-center text-lg text-white">
                  <div className="h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></div>
                  RuleBot Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="h-[350px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isBot 
                            ? "bg-rose-50 text-gray-800 rounded-tl-none" 
                            : "bg-rose-500 text-white rounded-tr-none"
                        }`}
                      >
                        {message.content}
                        <div 
                          className={`text-xs mt-1 ${
                            message.isBot ? "text-gray-500" : "text-rose-100"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-rose-200/20 p-3">
                <form 
                  className="flex w-full items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow bg-rose-50 border-rose-200 focus-visible:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  />
                  <Button 
                    type="submit"
                    size="icon"
                    className="bg-rose-500 text-white hover:bg-rose-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
            
            <div className="mt-2 text-xs text-gray-500 text-center">
              <button 
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center hover:text-rose-500 transition-colors"
              >
                <ChevronUp className="h-3 w-3 mr-1" /> Minimize chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant; 