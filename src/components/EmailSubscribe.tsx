
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BellRing, Send } from 'lucide-react';

const EmailSubscribe: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would typically send the data to a backend API
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      console.log('Subscription submitted:', { email, smsConsent });
      toast({
        title: "Subscription successful!",
        description: "You'll be among the first to receive updates about Maximally.",
      });
      
      // Reset form
      setEmail('');
      setSmsConsent(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="subscribe-email" className="text-gray-700 font-medium flex items-center gap-2">
          <BellRing className="h-4 w-4 text-maximally-neon-purple animate-ping-slow" />
          Email
        </Label>
        <Input
          id="subscribe-email"
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-maximally-neon-purple/30 focus:border-maximally-neon-purple focus-visible:ring-maximally-neon-purple/20 transition-all duration-300 hover:shadow-md"
        />
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox 
          id="sms-consent" 
          checked={smsConsent} 
          onCheckedChange={(checked) => setSmsConsent(checked as boolean)}
          className="border-maximally-neon-purple/50 data-[state=checked]:bg-maximally-neon-purple data-[state=checked]:text-white mt-1"
        />
        <Label htmlFor="sms-consent" className="text-sm text-gray-600 font-medium">
          I agree to receive SMS updates about Maximally's launch and offers.
        </Label>
      </div>

      <Button 
        type="submit" 
        variant="outline"
        className="w-full border-2 border-maximally-neon-purple text-maximally-neon-purple hover:bg-maximally-neon-purple hover:text-white hover:scale-105 hover:shadow-neon transition-all duration-300 font-bold rounded-xl py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            Stay Updated
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default EmailSubscribe;
