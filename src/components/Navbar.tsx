
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand-darkGray">
          arify<span className="text-brand-blue">.net</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => scrollToSection("problem")}
            className="text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Problem
          </a>
          <a
            onClick={() => scrollToSection("solution")}
            className="text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Solution
          </a>
          <a
            onClick={() => scrollToSection("benefits")}
            className="text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Benefits
          </a>
          <Button
            onClick={() => scrollToSection("contact")}
            className="btn-primary"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-darkGray"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 p-6 pt-24 transform transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <a
            onClick={() => scrollToSection("problem")}
            className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Problem
          </a>
          <a
            onClick={() => scrollToSection("solution")}
            className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Solution
          </a>
          <a
            onClick={() => scrollToSection("benefits")}
            className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors cursor-pointer"
          >
            Benefits
          </a>
          <Button
            onClick={() => scrollToSection("contact")}
            className="btn-primary w-full"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
