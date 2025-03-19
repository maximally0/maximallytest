
import React from 'react';
import { ArrowLeft, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maximally-cream relative overflow-hidden">
      <Helmet>
        <title>Terms of Service | Maximally</title>
        <meta name="description" content="Maximally's Terms of Service outline the rules and guidelines for using our products and services." />
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
          
          <h1 className="text-4xl font-bold text-maximally-black mb-8 lowercase">terms of service</h1>
          
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p className="mb-4">
              Please read these Terms of Service ("Terms") carefully before using the Maximally website or 
              purchasing any products from us. By accessing our website or using our services, you agree 
              to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">1. acceptance of terms</h2>
            <p className="mb-4">
              By accessing or using our website, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms. If you do not agree to these Terms, please do not use our website 
              or services.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">2. products and services</h2>
            <p className="mb-4">
              All products and services offered through our website are described with reasonable accuracy, 
              but we do not guarantee that the descriptions, pricing, or other content on the website are 
              complete, accurate, reliable, current, or error-free.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">3. ordering and payment</h2>
            <p className="mb-4">
              When you place an order through our website, you are making an offer to purchase the products 
              or services at the listed price. We reserve the right to accept or decline your order for any 
              reason. Payment must be made at the time of order using the available payment methods.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">4. pre-orders</h2>
            <p className="mb-4">
              For pre-ordered products, estimated delivery dates are provided in good faith but are not 
              guaranteed. By placing a pre-order, you acknowledge that there may be delays beyond our control 
              and that the final product may differ slightly from any descriptions or images provided.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">5. shipping and delivery</h2>
            <p className="mb-4">
              We will make reasonable efforts to deliver products within the estimated timeframes. However, 
              delivery dates are not guaranteed, and we are not responsible for delays caused by shipping 
              carriers or other factors beyond our control.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">6. returns and refunds</h2>
            <p className="mb-4">
              Our return and refund policy will be provided separately and is incorporated into these Terms. 
              By making a purchase, you agree to the terms of our return and refund policy.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">7. intellectual property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the 
              property of Maximally or its content suppliers and is protected by intellectual property laws. 
              You may not reproduce, distribute, or create derivative works from this content without explicit 
              permission.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">8. user content</h2>
            <p className="mb-4">
              By submitting any content to our website (such as reviews or comments), you grant us a 
              non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, 
              and display that content in connection with our services.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">9. limitation of liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Maximally shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of or 
              inability to use our services or products.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">10. changes to terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our website after any such changes 
              constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-maximally-black mt-8 mb-4 lowercase">11. contact information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
