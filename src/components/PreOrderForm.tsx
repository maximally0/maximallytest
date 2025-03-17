
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const PreOrderForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would typically send the data to a backend API
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Pre-order request submitted!",
        description: "Thank you for your interest in Maximally. We'll contact you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border-maximally-green/30 focus:border-maximally-green focus-visible:ring-maximally-green/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border-maximally-green/30 focus:border-maximally-green focus-visible:ring-maximally-green/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="border-maximally-green/30 focus:border-maximally-green focus-visible:ring-maximally-green/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-700 font-medium">Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="Your shipping address"
          required
          value={formData.address}
          onChange={handleChange}
          className="border-maximally-green/30 focus:border-maximally-green focus-visible:ring-maximally-green/20 transition-all duration-300"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-maximally-green to-maximally-blue text-gray-800 font-bold hover:shadow-lg hover:from-maximally-blue hover:to-maximally-green transition-all duration-300 rounded-xl py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            Pre-Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
            <Sparkles className="ml-1 h-4 w-4 animate-pulse" />
          </>
        )}
      </Button>
    </form>
  );
};

export default PreOrderForm;
