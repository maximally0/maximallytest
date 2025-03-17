
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="subscribe-email">Email</Label>
        <Input
          id="subscribe-email"
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="sms-consent" 
          checked={smsConsent} 
          onCheckedChange={(checked) => setSmsConsent(checked as boolean)}
        />
        <Label htmlFor="sms-consent" className="text-sm text-gray-600">
          I agree to receive SMS updates about Maximally's launch and offers.
        </Label>
      </div>

      <Button 
        type="submit" 
        variant="outline"
        className="w-full border-maximally-green text-maximally-green hover:bg-maximally-green hover:text-white transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Stay Updated"}
      </Button>
    </form>
  );
};

export default EmailSubscribe;
