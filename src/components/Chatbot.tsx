import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your KaLerato Holdings assistant. How can I help you with your digital billboard advertising needs today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses = [
    "What are your pricing plans?",
    "How do digital billboards work?",
    "What locations do you cover?",
    "Can I see campaign examples?"
  ];

  const botResponses: Record<string, string> = {
    'pricing': "Our pricing starts at $2,500/month for our Starter plan, $5,500/month for Professional, and $12,000/month for Enterprise. Each plan includes different features and billboard locations. Would you like more details about a specific plan?",
    'how': "Our digital billboards use high-resolution LED displays that can show dynamic content, videos, and images. You can update your ads in real-time through our platform, schedule different content for different times, and track performance with analytics.",
    'locations': "We have digital billboard networks in over 50 cities across major metropolitan areas. Our premium locations include highways, downtown districts, shopping centers, and high-traffic urban areas. Where are you looking to advertise?",
    'examples': "I'd be happy to show you our campaign examples! Our portfolio includes successful campaigns for retail brands, restaurants, entertainment venues, and B2B companies. You can schedule a demo to see live examples and case studies.",
    'contact': "You can reach us at +1 (555) 123-4567, email info@kalerato.com, or fill out the contact form on this page. Our team typically responds within 2 hours during business hours.",
    'default': "That's a great question! For detailed information about that topic, I'd recommend speaking with one of our advertising specialists. You can contact them using the form above or call us directly. Is there anything else about our services I can help explain?"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return botResponses.pricing;
    }
    if (message.includes('how') || message.includes('work') || message.includes('digital billboard')) {
      return botResponses.how;
    }
    if (message.includes('location') || message.includes('where') || message.includes('cover')) {
      return botResponses.locations;
    }
    if (message.includes('example') || message.includes('portfolio') || message.includes('case')) {
      return botResponses.examples;
    }
    if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return botResponses.contact;
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-primary hover:shadow-glow"
        variant="cta"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-card border-border shadow-card animate-slide-in-right">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Bot className="w-5 h-5" />
              <span>KaLerato Assistant</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-gradient-primary text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot && <Bot className="w-4 h-4 mt-0.5" />}
                      {!message.isBot && <User className="w-4 h-4 mt-0.5" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Responses */}
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickResponses.map((response, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-auto py-1 px-2 border border-border hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleQuickResponse(response)}
                  >
                    {response}
                  </Button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  variant="cta"
                  size="icon"
                  className="shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;