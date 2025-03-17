
import React from 'react';
import { ArrowRight, Mail, Users, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import PreOrderForm from '@/components/PreOrderForm';
import EmailSubscribe from '@/components/EmailSubscribe';
import TransparencyStatement from '@/components/TransparencyStatement';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maximally-cream relative overflow-hidden">
      {/* Abstract geometric shapes - background elements */}
      <div className="abstract-shape w-32 h-32 bg-maximally-yellow rounded-full top-20 -left-10 opacity-20 animate-float"></div>
      <div className="abstract-shape w-40 h-40 bg-maximally-blue top-40 -right-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="abstract-shape w-24 h-24 bg-maximally-red bottom-40 left-1/3 opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="abstract-shape w-20 h-20 bg-maximally-green rounded-sm bottom-20 right-1/4 opacity-20 animate-rotate-slow"></div>
      
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex space-x-4">
            <a 
              href="https://forms.gle/example-influencer-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-maximally-black flex items-center transition-colors"
            >
              <Users className="h-4 w-4 mr-1" />
              Influencer Network
            </a>
            <a 
              href="/careers" 
              className="text-sm text-gray-600 hover:text-maximally-black flex items-center transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              Careers
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 relative">
              {/* Geometric element */}
              <div className="absolute -top-8 -left-4 w-16 h-16 bg-maximally-red rounded-sm opacity-70 -rotate-12"></div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-maximally-black lowercase relative z-10 tracking-tight">
                maximally
              </h1>
              
              <div className="flex space-x-4">
                <div className="h-4 w-20 bg-maximally-blue"></div>
                <div className="h-4 w-4 rounded-full bg-maximally-yellow"></div>
                <div className="h-4 w-12 bg-maximally-green"></div>
              </div>
              
              <p className="text-xl text-gray-700 max-w-md">
                A Transparent Approach to Gut Health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-maximally-black text-white hover:bg-gray-800 transition-colors btn-hover"
                  onClick={() => document.getElementById('pre-order')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Pre-Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-maximally-black text-maximally-black hover:bg-maximally-black hover:text-white transition-colors"
                  onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Stay Updated
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white p-8 rounded-sm card-shadow animate-fade-in z-10 relative">
                  <PreOrderForm />
                </div>
                {/* Geometric elements behind form */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-maximally-yellow rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <CountdownTimer />

      {/* Transparency Section */}
      <section id="transparency" className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <TransparencyStatement />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-sm overflow-hidden border-2 border-maximally-black">
                <div className="aspect-[4/3] bg-maximally-cream flex items-center justify-center p-8 relative">
                  {/* Geometric shapes within the panel */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-maximally-blue opacity-40"></div>
                  <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-maximally-red opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-maximally-green opacity-70"></div>
                  
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-semibold text-maximally-black mb-2 lowercase">backed by science</h3>
                    <p className="text-gray-700">Our formulas are developed with leading microbiome scientists and nutritionists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order Section (Anchor) */}
      <section id="pre-order" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-maximally-black mb-4 lowercase">ready to transform your gut health?</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Be among the first to experience Maximally's premium probiotics. Pre-order now 
            and join our growing community of gut health enthusiasts.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white p-8 rounded-sm card-shadow relative z-10">
                <PreOrderForm />
              </div>
              {/* Geometric background elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-maximally-green rounded-sm -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative">
            {/* Geometric shapes */}
            <div className="absolute -top-10 -left-6 w-16 h-4 bg-maximally-red"></div>
            <div className="absolute bottom-0 right-1/4 w-10 h-10 rounded-full bg-maximally-yellow opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-maximally-black mb-4 lowercase">stay updated</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our email list for exclusive updates, launch offers, and expert gut health tips.
            </p>
            <EmailSubscribe />
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-sm overflow-hidden">
                <div className="aspect-[4/3] bg-maximally-cream flex items-center justify-center p-8 border-2 border-maximally-black">
                  <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold text-maximally-black lowercase">join our community</h3>
                    <div className="flex flex-col gap-4">
                      <a 
                        href="https://forms.gle/example-influencer-form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-sm bg-white text-maximally-black border-2 border-maximally-black hover:bg-maximally-black hover:text-white transition-colors btn-hover"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Join Our Influencer Network
                      </a>
                      <a 
                        href="/careers" 
                        className="inline-flex items-center justify-center px-4 py-2 rounded-sm bg-white text-maximally-black border-2 border-maximally-black hover:bg-maximally-black hover:text-white transition-colors btn-hover"
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
      <footer className="border-t border-gray-100 py-8 px-6 mt-auto bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Maximally. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="p-2 text-gray-600 hover:text-maximally-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-maximally-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-maximally-black transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-maximally-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-maximally-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-maximally-black transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
