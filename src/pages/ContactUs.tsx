
import React, { useState } from 'react';
import { ArrowLeft, Instagram, Linkedin, Phone, Mail, Send, MessageSquare, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';
import { supabase } from "@/integrations/supabase/client";

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { name, email, message }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-maximally-cream relative overflow-hidden">
      <Helmet>
        <title>Contact Us | Maximally</title>
        <meta name="description" content="Get in touch with Maximally for questions about our products, pre-orders, or general inquiries." />
      </Helmet>

      {/* Abstract geometric shapes - background elements */}
      <div className="abstract-shape w-32 h-32 bg-maximally-yellow rounded-full top-20 -left-10 opacity-20 animate-float"></div>
      <div className="abstract-shape w-24 h-24 bg-maximally-red bottom-40 left-1/3 opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/">
            <Logo />
          </a>
          <div className="flex space-x-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScF7pAVB7V9lq402308_hWXsA57jXEMkmzoMh06mzSwCiQYyw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-maximally-black flex items-center transition-colors"
            >
              <span className="hidden md:inline-block">Influencer Network</span>
            </a>
            <a 
              href="/careers" 
              className="text-sm text-gray-600 hover:text-maximally-black flex items-center transition-colors"
            >
              <span className="hidden md:inline-block">Careers</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-maximally-black mb-8 lowercase">contact us</h1>
          
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold text-maximally-black mb-6 lowercase">get in touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-maximally-black text-white hover:bg-gray-800 transition-colors btn-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-8 rounded-sm shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-maximally-black mb-6 lowercase">contact information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-maximally-green mt-1" />
                    <div>
                      <h3 className="font-medium text-maximally-black mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-1">For general inquiries:</p>
                      <a href="mailto:hello@maximally.in" className="text-maximally-black hover:text-maximally-green transition-colors">hello@maximally.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-maximally-yellow mt-1" />
                    <div>
                      <h3 className="font-medium text-maximally-black mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-1">Customer Support:</p>
                      <a href="tel:+919041260790" className="text-maximally-black hover:text-maximally-green transition-colors">+91 9041260790</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-maximally-blue mt-1" />
                    <div>
                      <h3 className="font-medium text-maximally-black mb-1">Social Media</h3>
                      <p className="text-gray-600 mb-2">Connect with us:</p>
                      <div className="flex space-x-4">
                        <a href="https://www.instagram.com/maximally.in/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-maximally-black transition-colors">
                          <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/maximallysupplements/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-maximally-black transition-colors">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold text-maximally-black mb-6 lowercase">frequently asked questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-maximally-black mb-2">When will my pre-order ship?</h3>
                    <p className="text-gray-600">Pre-orders are expected to ship within 30 days of our launch date. You'll receive tracking information once your order ships.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-maximally-black mb-2">Do you ship internationally?</h3>
                    <p className="text-gray-600">Yes, we ship to select countries. International shipping rates and delivery times vary by location.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-maximally-black mb-2">What's your return policy?</h3>
                    <p className="text-gray-600">We offer a 30-day satisfaction guarantee. If you're not completely satisfied, please contact us for a refund or replacement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6 mt-auto bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Maximally. All rights reserved.</p>
            <div className="flex flex-col mt-3 gap-1 text-sm text-gray-500">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9041260790</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:hello@maximally.in" className="hover:text-maximally-black transition-colors">hello@maximally.in</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://www.instagram.com/maximally.in/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-maximally-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/maximallysupplements/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-maximally-black transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <a href="/privacy-policy" className="hover:text-maximally-black transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-maximally-black transition-colors">Terms of Service</a>
              <a href="/contact-us" className="hover:text-maximally-black transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
