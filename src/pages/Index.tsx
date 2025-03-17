
import React from 'react';
import { ArrowRight, Mail, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import PreOrderForm from '@/components/PreOrderForm';
import EmailSubscribe from '@/components/EmailSubscribe';
import TransparencyStatement from '@/components/TransparencyStatement';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex space-x-4">
            <a 
              href="https://forms.gle/example-influencer-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-maximally-green flex items-center transition-colors"
            >
              <Users className="h-4 w-4 mr-1" />
              Influencer Network
            </a>
            <a 
              href="/careers" 
              className="text-sm text-gray-600 hover:text-maximally-green flex items-center transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              Careers
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative gradient-bg py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Maximally – The Future of Gut Health is Here!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transparent. Science-Backed. Designed for Your Best Gut Health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-maximally-green text-white hover:bg-maximally-dark-green transition-colors flex items-center"
                onClick={() => document.getElementById('pre-order')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-maximally-green text-maximally-green hover:bg-maximally-green hover:text-white transition-colors"
                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Mailing List
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 bg-maximally-light-green rounded-full w-32 h-32 opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 bg-maximally-blue rounded-full w-40 h-40 opacity-10"></div>
              <div className="relative bg-white p-8 rounded-xl card-shadow animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Pre-Order Your First Bottle</h2>
                <PreOrderForm />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Countdown Section */}
      <CountdownTimer />

      {/* Transparency Section */}
      <section id="transparency" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <TransparencyStatement />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-maximally-light-green/30 to-maximally-blue/20 mix-blend-overlay"></div>
                <div className="aspect-[4/3] bg-maximally-beige flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Backed by Science</h3>
                    <p className="text-gray-600">Our formulas are developed with leading microbiome scientists and nutritionists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order Section (Anchor) */}
      <section id="pre-order" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Gut Health?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Be among the first to experience Maximally's premium probiotics. Pre-order now 
            and join our growing community of gut health enthusiasts.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 bg-maximally-light-green rounded-full w-32 h-32 opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 bg-maximally-blue rounded-full w-40 h-40 opacity-10"></div>
              <div className="relative bg-white p-8 rounded-xl card-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Pre-Order Your First Bottle</h2>
                <PreOrderForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our email list for exclusive updates, launch offers, and expert gut health tips.
            </p>
            <EmailSubscribe />
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-maximally-light-blue/30 to-maximally-green/20 mix-blend-overlay"></div>
                <div className="aspect-[4/3] bg-maximally-light-beige flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Join Our Community</h3>
                    <div className="flex flex-col gap-4">
                      <a 
                        href="https://forms.gle/example-influencer-form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-maximally-green border border-maximally-green hover:bg-maximally-green hover:text-white transition-colors"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Join Our Influencer Network
                      </a>
                      <a 
                        href="/careers" 
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-maximally-blue border border-maximally-blue hover:bg-maximally-blue hover:text-white transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Careers at Maximally
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Maximally. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-maximally-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-maximally-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-maximally-green transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
