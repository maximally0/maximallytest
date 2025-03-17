
import React from 'react';
import { ArrowRight, Mail, Users, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import PreOrderForm from '@/components/PreOrderForm';
import EmailSubscribe from '@/components/EmailSubscribe';
import TransparencyStatement from '@/components/TransparencyStatement';

const Index: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex space-x-4">
            <a 
              href="https://forms.gle/example-influencer-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-maximally-purple flex items-center transition-colors"
            >
              <Users className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Influencer Network</span>
            </a>
            <a 
              href="/careers" 
              className="text-sm font-medium text-gray-700 hover:text-maximally-purple flex items-center transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Careers</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative hero-gradient py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              <span className="block bg-gradient-to-r from-maximally-green to-maximally-blue bg-clip-text text-transparent mb-2">
                Maximally
              </span>
              <span className="block text-gray-800 text-3xl md:text-5xl">
                The Future of Gut Health is Here!
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-maximally-purple">Transparent.</span> <span className="font-bold text-maximally-blue">Science-Backed.</span> <span className="font-bold text-maximally-green">Designed for Your Best Gut Health.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-maximally-green to-maximally-blue text-gray-800 hover:shadow-lg hover:from-maximally-blue hover:to-maximally-green transition-all duration-300 font-bold rounded-xl py-6 px-8 text-lg"
                onClick={() => scrollToSection('pre-order')}
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
                <Sparkles className="ml-1 h-4 w-4 animate-pulse" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-maximally-purple text-maximally-purple hover:bg-maximally-purple hover:text-white transition-all duration-300 font-bold rounded-xl py-6 px-8 text-lg"
                onClick={() => scrollToSection('subscribe')}
              >
                Join Our Mailing List
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md mx-auto lg:mx-0">
            <div className="relative w-full">
              <div className="absolute -top-8 -right-8 bg-maximally-green/20 rounded-full w-40 h-40 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 bg-maximally-purple/20 rounded-full w-48 h-48 blur-xl"></div>
              <div className="relative glow-card bg-white p-8 rounded-2xl animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-6 w-6 text-maximally-green animate-pulse" />
                  <h2 className="text-2xl font-extrabold text-gray-800">Pre-Order Your First Bottle</h2>
                </div>
                <PreOrderForm />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
          <button 
            onClick={() => scrollToSection('countdown')} 
            className="text-gray-600 hover:text-maximally-purple transition-colors animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-16 px-6 bg-gradient-to-br from-white to-maximally-green/5">
        <CountdownTimer />
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('transparency')}
            className="text-gray-600 hover:text-maximally-purple transition-colors group"
          >
            Learn About Our Values
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Transparency Section */}
      <section id="transparency" className="py-20 px-6 bg-gradient-to-br from-white to-maximally-purple/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <TransparencyStatement />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative purple-glow-card rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-maximally-purple/10 to-maximally-pink/10 mix-blend-overlay"></div>
                <div className="aspect-square bg-white flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <Sparkles className="h-12 w-12 text-maximally-purple mx-auto animate-float" />
                    <h3 className="text-2xl font-extrabold text-gray-800">Backed by Science</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our formulas are developed with leading microbiome scientists and nutritionists to deliver real results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('pre-order')}
            className="text-gray-600 hover:text-maximally-purple transition-colors group"
          >
            Ready to Pre-Order?
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Pre-Order Section (Anchor) */}
      <section id="pre-order" className="py-20 px-6 bg-gradient-to-br from-white to-maximally-blue/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-maximally-blue to-maximally-green bg-clip-text text-transparent">
            Ready to Transform Your Gut Health?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience Maximally's premium probiotics. Pre-order now 
            and join our growing community of gut health enthusiasts.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -right-8 bg-maximally-blue/20 rounded-full w-40 h-40 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 bg-maximally-green/20 rounded-full w-48 h-48 blur-xl"></div>
              <div className="relative blue-glow-card bg-white p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-6 w-6 text-maximally-blue animate-pulse" />
                  <h2 className="text-2xl font-extrabold text-gray-800">Pre-Order Your First Bottle</h2>
                </div>
                <PreOrderForm />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('subscribe')}
            className="text-gray-600 hover:text-maximally-purple transition-colors group"
          >
            Stay Updated
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 px-6 bg-gradient-to-br from-white to-maximally-pink/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-maximally-purple to-maximally-pink bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Join our email list for exclusive updates, launch offers, and expert gut health tips.
            </p>
            <EmailSubscribe />
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative purple-glow-card rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-maximally-pink/10 to-maximally-purple/10 mix-blend-overlay"></div>
                <div className="aspect-square bg-white flex items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-extrabold text-gray-800">Join Our Community</h3>
                    <div className="flex flex-col gap-4">
                      <a 
                        href="https://forms.gle/example-influencer-form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-maximally-pink to-maximally-purple text-white border-0 hover:shadow-lg transition-all duration-300 font-bold"
                      >
                        <Users className="h-5 w-5 mr-2" />
                        Join Our Influencer Network
                      </a>
                      <a 
                        href="/careers" 
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-maximally-purple to-maximally-blue text-white border-0 hover:shadow-lg transition-all duration-300 font-bold"
                      >
                        <Mail className="h-5 w-5 mr-2" />
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
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Logo />
            <p className="text-sm text-gray-600 mt-3">© {new Date().getFullYear()} Maximally. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-maximally-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-maximally-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-700 hover:text-maximally-purple transition-colors">Contact Us</a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-maximally-purple transition-colors group"
          >
            Back to Top
            <ChevronUp className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
