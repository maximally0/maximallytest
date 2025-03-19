
import React from 'react';
import { ArrowRight, Mail, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maximally-cream relative overflow-hidden">
      <Helmet>
        <title>Careers | Maximally</title>
        <meta name="description" content="Join our team at Maximally. We're always hiring talented minds passionate about transforming gut health through science-backed probiotics." />
      </Helmet>
      
      {/* Abstract geometric shapes - background elements */}
      <div className="abstract-shape w-32 h-32 bg-maximally-yellow rounded-full top-20 -left-10 opacity-20 animate-float"></div>
      <div className="abstract-shape w-40 h-40 bg-maximally-blue top-40 -right-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="abstract-shape w-24 h-24 bg-maximally-red bottom-40 left-1/3 opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="abstract-shape w-20 h-20 bg-maximally-green rounded-sm bottom-20 right-1/4 opacity-20 animate-rotate-slow"></div>
      
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
              <Mail className="h-4 w-4 mr-1" />
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

      {/* Main content */}
      <main className="flex-grow py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-maximally-black lowercase relative z-10 tracking-tight mb-8">
              careers
            </h1>
            
            <div className="flex space-x-4 mb-12">
              <div className="h-4 w-20 bg-maximally-blue"></div>
              <div className="h-4 w-4 rounded-full bg-maximally-yellow"></div>
              <div className="h-4 w-12 bg-maximally-green"></div>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-lg relative mb-12">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-maximally-red opacity-40 rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-maximally-green opacity-40"></div>
              
              <h2 className="text-3xl font-bold lowercase mb-4">join our team</h2>
              <p className="text-lg text-gray-700 mb-8">
                At Maximally, we're on a mission to transform gut health through science-backed, 
                effective probiotic formulations. We're always looking for passionate, 
                talented individuals to join our growing team.
              </p>
              
              <h3 className="text-2xl font-semibold lowercase mb-3">why work with us?</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Be part of a mission-driven team passionate about improving health</li>
                <li>Work in a dynamic, fast-paced startup environment</li>
                <li>Collaborate with experts in science, nutrition, and wellness</li>
                <li>Help shape a growing brand from the ground up</li>
                <li>Opportunity for growth and advancement as we scale</li>
              </ul>
              
              <div className="bg-maximally-cream p-6 rounded-sm mb-8">
                <h3 className="text-2xl font-semibold lowercase mb-3">how to apply</h3>
                <p className="text-gray-700 mb-4">
                  We are always hiring talented minds and looking for passionate individuals 
                  to join our team. To apply, please send your resume and a brief cover letter to:
                </p>
                <div className="flex items-center justify-center bg-white p-4 rounded-sm border-2 border-maximally-black">
                  <a 
                    href="mailto:hello@maximally.in" 
                    className="text-xl font-medium text-maximally-black hover:text-maximally-green transition-colors"
                  >
                    hello@maximally.in
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  className="bg-maximally-black text-white hover:bg-gray-800 transition-colors btn-hover"
                  onClick={() => window.location.href = 'mailto:hello@maximally.in'}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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

export default Careers;
