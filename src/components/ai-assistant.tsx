import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hi! I'm your Community Hub assistant. I can help you find local resources, answer questions about services, or guide you through our website. How can I help you today?",
    timestamp: new Date(),
  },
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAssistantResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  const getAssistantResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('food') || input.includes('hungry') || input.includes('meal')) {
      return "I can help you find food assistance! The Downtown Food Bank offers free groceries and meals Tue-Thu 10am-4pm at 456 Oak Avenue. They don't require an appointment. Would you like directions or more food resources?";
    }
    
    if (input.includes('health') || input.includes('doctor') || input.includes('medical')) {
      return "For healthcare services, the City Community Health Center provides affordable primary care, dental, and mental health services. They're open Mon-Fri 8am-6pm at 123 Main Street. Would you like their phone number or to see other health resources?";
    }
    
    if (input.includes('job') || input.includes('work') || input.includes('employment')) {
      return "The Career Development Center can help with job training, resume assistance, and employment placement. They're located at 789 Elm Street and open Mon-Fri 9am-5pm. Would you like more employment resources?";
    }
    
    if (input.includes('housing') || input.includes('shelter') || input.includes('rent')) {
      return "Family Housing Resources offers emergency shelter, transitional housing, and rental assistance programs. They have a 24/7 hotline at (555) 456-7890. Would you like to explore more housing options?";
    }
    
    return "I'd be happy to help you find the right resources! You can browse by category, use our interactive map, or take our quick quiz to get personalized recommendations. What type of support are you looking for?";
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-14 h-14 shadow-xl bg-neutral-900 hover:bg-neutral-800"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="w-96 h-[500px] shadow-2xl flex flex-col bg-white border-neutral-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div>
                    <CardTitle className="text-lg text-neutral-900">Assistant</CardTitle>
                    <p className="text-xs text-neutral-500">Always available</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-900 hover:bg-neutral-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-neutral-900 text-white'
                              : 'bg-neutral-100 text-neutral-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.role === 'user' ? 'text-neutral-400' : 'text-neutral-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-neutral-200">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-neutral-200 text-sm"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="icon"
                      className="bg-neutral-900 hover:bg-neutral-800"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}