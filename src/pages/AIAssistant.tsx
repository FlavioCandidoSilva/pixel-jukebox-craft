
import { useState, useRef, useEffect } from "react";
import { Send, Music, Bot, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    content: "Hello! I'm your SpotiCraft AI assistant. Ask me anything about music, artists, or Minecraft sounds!",
    sender: "ai",
    timestamp: new Date(),
  },
];

// Example music questions for suggestions
const suggestedQuestions = [
  "What's the most popular Minecraft music?",
  "Who composed the original Minecraft soundtrack?",
  "Tell me about Lena Raine's contributions to Minecraft",
  "What instruments are used in Minecraft music?",
  "Recommend songs similar to C418's 'Sweden'",
  "How can I create my own note block music in Minecraft?",
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Mock AI responses
  const mockResponses: Record<string, string> = {
    "What's the most popular Minecraft music?": "The most popular Minecraft music is generally considered to be 'Sweden' by C418, which appears in Minecraft Volume Alpha. It's the iconic piano piece that many players associate with peaceful gameplay moments and often evokes nostalgia among longtime players.",
    "Who composed the original Minecraft soundtrack?": "The original Minecraft soundtrack was composed by Daniel Rosenfeld, better known as C418. He created the ambient and atmospheric music that became an iconic part of the Minecraft experience, including tracks like 'Sweden,' 'Wet Hands,' and 'Haggstrom.'",
    "Tell me about Lena Raine's contributions to Minecraft": "Lena Raine joined the Minecraft music team in 2020 and has created several notable tracks for the game. Her contributions include 'Pigstep' (the first music disc added in years) for the Nether Update, as well as 'Otherside' and the Caves & Cliffs soundtrack. Her style complements the original soundtrack while bringing fresh sounds to newer biomes.",
    "What instruments are used in Minecraft music?": "Minecraft music primarily uses piano, synthesizers, and ambient electronic sounds. C418's compositions often feature minimalist piano melodies, soft synthesizer pads, and occasional percussive elements. Lena Raine's additions incorporate similar instruments while adding new textures and rhythmic elements, especially in tracks like 'Pigstep' which features more pronounced beats.",
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      let response: string;
      
      if (mockResponses[userMessage.content]) {
        response = mockResponses[userMessage.content];
      } else {
        response = `I don't have specific information about "${userMessage.content}" yet, but I'm learning more about music every day! You can ask about C418, Lena Raine, or general Minecraft music topics.`;
      }

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="pb-12">
      <div className="bg-gradient-to-b from-craft-diamond/20 to-transparent p-6 mb-6 animate-fade-in">
        <div className="flex items-center mb-2">
          <Bot size={24} className="mr-2 text-craft-diamond" />
          <h1 className="text-3xl font-minecraft text-white">AI Music Assistant</h1>
        </div>
        <p className="font-minecraft text-sm text-gray-300">Get answers to your music questions and discover new sounds</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-spotify-lightBlack minecraft-card h-[calc(70vh-180px)] flex flex-col">
            <div className="flex items-center justify-between bg-spotify-black px-4 py-3">
              <h3 className="font-minecraft text-white">Chat with NoteBuddy AI</h3>
              <Bot size={20} className="text-craft-diamond" />
            </div>
            
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div 
                      className={cn(
                        "max-w-[80%] px-4 py-3 rounded-sm",
                        message.sender === "user" 
                          ? "bg-craft-grass text-white" 
                          : "bg-spotify-black text-white border-l-2 border-craft-diamond"
                      )}
                    >
                      <div className="flex gap-2 items-center mb-1">
                        {message.sender === "ai" ? (
                          <Bot size={16} className="text-craft-diamond" />
                        ) : (
                          <UserIcon size={16} className="text-white" />
                        )}
                        <span className="font-minecraft text-xs opacity-70">
                          {message.sender === "ai" ? "NoteBuddy AI" : "You"}
                        </span>
                      </div>
                      <p className="font-minecraft text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-spotify-black text-white border-l-2 border-craft-diamond max-w-[80%] px-4 py-3 rounded-sm">
                      <div className="flex gap-2 items-center mb-1">
                        <Bot size={16} className="text-craft-diamond" />
                        <span className="font-minecraft text-xs opacity-70">NoteBuddy AI</span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-craft-diamond rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-craft-diamond rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-craft-diamond rounded-full animate-pulse delay-300"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex gap-2">
              <Input
                placeholder="Ask about music, artists, or Minecraft sounds..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="font-minecraft text-sm pixel-input flex-1"
              />
              <Button 
                type="submit" 
                className="pixel-button bg-craft-diamond hover:bg-craft-diamond/80 text-white"
                disabled={isLoading || !input.trim()}
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-spotify-lightBlack minecraft-card p-4">
            <h3 className="font-minecraft text-white mb-4 flex items-center">
              <Music size={16} className="mr-2 text-craft-diamond" />
              Suggested Questions
            </h3>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="w-full text-left p-2 font-minecraft text-xs text-gray-300 hover:text-white hover:bg-gray-800 transition-colors rounded-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 bg-spotify-lightBlack minecraft-card p-4">
            <h3 className="font-minecraft text-white mb-3">About NoteBuddy AI</h3>
            <p className="text-gray-300 text-xs font-minecraft mb-3">
              NoteBuddy is an AI assistant specialized in music knowledge, particularly focused on Minecraft music and game soundtracks.
            </p>
            <p className="text-gray-300 text-xs font-minecraft">
              Ask about composers, tracks, instruments, or music theory related to your favorite game tunes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
