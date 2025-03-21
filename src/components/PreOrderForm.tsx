
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store the form data in the preorder_submissions table
      const { error } = await supabase
        .from('preorder_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address
          }
        ]);

      if (error) throw error;

      // Also store the email in the email_subscriptions table
      const { error: emailError } = await supabase
        .from('email_subscriptions')
        .insert([
          {
            email: formData.email,
            sms_consent: false
          }
        ])
        .match({ email: formData.email });

      // We don't throw on emailError as it might be a duplicate

      console.log('Form submitted successfully');
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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your pre-order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md relative">
      {/* Geometric shapes */}
      <div className="absolute -top-6 -right-6 w-10 h-10 bg-maximally-red opacity-40 rotate-12"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-maximally-yellow rounded-full opacity-40"></div>
      
      <div className="text-left mb-6">
        <h3 className="text-xl font-bold lowercase">secure your first batch</h3>
        <p className="text-gray-600">of Maximally probiotics now.</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="name" className="text-maximally-black font-medium">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border-gray-300 focus:border-maximally-green bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-maximally-black font-medium">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border-gray-300 focus:border-maximally-green bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-maximally-black font-medium">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="border-gray-300 focus:border-maximally-green bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-maximally-black font-medium">Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="Your shipping address"
          required
          value={formData.address}
          onChange={handleChange}
          className="border-gray-300 focus:border-maximally-green bg-white"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-maximally-black text-white hover:bg-gray-800 transition-colors btn-hover"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Pre-Order Now"}
      </Button>
    </form>
  );
};

export default PreOrderForm;
