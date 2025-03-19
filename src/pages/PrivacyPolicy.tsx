
import React from 'react';
import { ArrowLeft, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maximally-cream relative overflow-hidden">
      <Helmet>
        <title>Privacy Policy | Maximally</title>
        <meta name="description" content="Maximally's Privacy Policy outlines how we collect, use, and protect your personal information." />
      </Helmet>

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
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-sm shadow-sm">
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-maximally-black mb-8 lowercase">privacy policy</h1>
          
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">1. introduction</h2>
            <p className="mb-4">
              At Maximally ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, 
              use our services, or interact with us in any way.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">2. information we collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and other details you provide when placing pre-orders or subscribing to our services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including browsing patterns, pages visited, and features used.</li>
              <li><strong>Device Information:</strong> Details about the device you use to access our services, including IP address, browser type, and operating system.</li>
              <li><strong>Cookies and Similar Technologies:</strong> Data collected through cookies, web beacons, and similar tracking technologies.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">3. how we use your information</h2>
            <p className="mb-2">We use your information for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Processing and fulfilling your pre-orders</li>
              <li>Sending you updates about our products and services</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraudulent activities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">4. data sharing and disclosure</h2>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business and website.</li>
              <li><strong>Business Partners:</strong> Companies we work with to offer joint products or services.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">5. your rights and choices</h2>
            <p className="mb-2">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent for certain processing activities</li>
              <li>Objecting to the processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">6. data security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">7. changes to this privacy policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">8. contact us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-maximally-cream p-4 rounded-sm mb-6">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:hello@maximally.in" className="text-maximally-green hover:underline">hello@maximally.in</a></p>
              <p><strong>Phone:</strong> +91 9041260790</p>
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

export default PrivacyPolicy;
