
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-brand-darkGray">
              arify<span className="text-brand-blue">.net</span>
            </a>
            <p className="text-sm text-brand-gray mt-2">
              Making scleral lens insertion safer and easier.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                About
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                Features
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                Pricing
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-brand-gray">
            © {new Date().getFullYear()} arify.net. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
