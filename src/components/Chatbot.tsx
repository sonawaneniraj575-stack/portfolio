import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  cohereToken?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ cohereToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Niraj's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Enhanced fallback responses with more context about Niraj
    const fallbackResponses = {
      skills: "Niraj is skilled in React, TypeScript, Node.js, Python, and AI integration. He's passionate about full-stack development and creating intelligent web applications. His tech stack includes modern frameworks like Next.js, Express.js, and databases like MongoDB and PostgreSQL.",
      projects: "Niraj has worked on various projects including AI-integrated web solutions, modern React applications, and full-stack development projects. His portfolio showcases responsive web applications, interactive dashboards, and innovative AI-powered tools. Check out his portfolio above to see his latest work!",
      experience: "Niraj is an IT student with a focus on full-stack development. He specializes in building scalable, user-friendly applications with AI integration. He has experience in both frontend and backend development, with a strong foundation in modern web technologies.",
      education: "Niraj is currently pursuing his studies in Information Technology, focusing on modern web development and AI technologies. He's constantly learning new technologies and staying updated with the latest industry trends.",
      contact: "You can reach out to Niraj through the contact information in his portfolio. He's always interested in discussing new opportunities, collaborations, and innovative projects. Feel free to connect with him for freelance work or full-time opportunities!",
      about: "Niraj Sonawane is a passionate IT student and aspiring full-stack developer who loves creating innovative digital solutions. He combines technical expertise with creativity to build user-friendly applications that solve real-world problems.",
      hire: "Niraj is available for freelance projects and full-time opportunities! He specializes in React development, full-stack applications, and AI integration. Contact him through his portfolio to discuss your project requirements.",
      default: "hello how can i help you"
    };

    const lowerMessage = userMessage.toLowerCase();
    
    // More comprehensive keyword matching
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming') || lowerMessage.includes('tech stack') || lowerMessage.includes('languages')) {
      return fallbackResponses.skills;
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio') || lowerMessage.includes('build') || lowerMessage.includes('created')) {
      return fallbackResponses.projects;
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career') || lowerMessage.includes('professional')) {
      return fallbackResponses.experience;
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('learn') || lowerMessage.includes('university') || lowerMessage.includes('college')) {
      return fallbackResponses.education;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('connect')) {
      return fallbackResponses.contact;
    }
    if (lowerMessage.includes('hire') || lowerMessage.includes('freelance') || lowerMessage.includes('job') || lowerMessage.includes('opportunity') || lowerMessage.includes('available')) {
      return fallbackResponses.hire;
    }
    if (lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('niraj')) {
      return fallbackResponses.about;
    }

    // If Cohere token is provided, use the API
    if (cohereToken) {
      try {
        const response = await fetch('https://api.cohere.ai/v1/generate', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${cohereToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'command-light',
            prompt: `You are an AI assistant for Niraj Sonawane's portfolio website. Here's what you need to know about Niraj:

- He's an IT student passionate about full-stack development
- Skilled in React, TypeScript, Node.js, Python, and AI integration
- Specializes in building scalable, user-friendly web applications
- Has experience with modern frameworks like Next.js, Express.js
- Works with databases like MongoDB and PostgreSQL
- Creates AI-integrated web solutions and interactive dashboards
- Available for freelance projects and full-time opportunities
- Currently studying Information Technology
- Passionate about innovation and solving real-world problems

Keep your responses helpful, professional, and conversational. Focus on Niraj's skills and experience.

User question: ${userMessage}

Response:`,
            max_tokens: 150,
            temperature: 0.7,
            stop_sequences: ["User:", "Response:"]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const generatedText = data.generations[0]?.text?.trim();
          
          if (generatedText && generatedText.length > 0) {
            return generatedText;
          }
        } else {
          console.error('Cohere API error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Cohere API error:', error);
      }
    }

    return fallbackResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, I'm having trouble processing your request right now. Please try again later!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-96 h-[500px] bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#00B2A9] to-[#0C7B73] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-80">Ask me about Niraj</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-background/50 to-background/80">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-[#00B2A9] text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-[#00B2A9] text-white rounded-br-md'
                        : 'bg-muted text-foreground rounded-bl-md'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-muted p-3 rounded-2xl rounded-bl-md">
                      <div className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Niraj..."
                  className="flex-1 p-3 bg-muted rounded-xl border-none outline-none text-sm focus:ring-2 focus:ring-[#00B2A9]/50"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 bg-[#00B2A9] text-white rounded-xl hover:bg-[#008A84] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-[#00B2A9] to-[#0C7B73] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#00B2A9] animate-ping opacity-20"></div>
      </motion.button>
    </div>
  );
};

export default Chatbot;