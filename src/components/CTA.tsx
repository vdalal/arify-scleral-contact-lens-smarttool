
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { Smartphone, User, Mail, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CTA: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c8e9b2ef-6207-46de-b889-9b63321fbc39");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      console.log("Web3Forms submission result:", response.status, response.statusText);
      
      // Try to parse the response
      try {
        const result = await response.json();
        console.log("Web3Forms response data:", result);
        
        // Always show success toast
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        
        // Add a small delay before resetting the form
        setTimeout(() => {
          event.currentTarget.reset();
        }, 500);
        
      } catch (parseError) {
        console.log("Could not parse response:", parseError);
        // Still show success if we couldn't parse the response but the request was sent
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        
        // Add a small delay before resetting the form
        setTimeout(() => {
          event.currentTarget.reset();
        }, 500);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Add a small delay before changing submission state
      setTimeout(() => {
        setIsSubmitting(false);
      }, 600); // Slightly longer delay than form reset
    }
  }

  return (
    <section id="contact" className="section bg-brand-blue/5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 bg-white/70">
            <div className="text-center">
              <h2 className="mb-6">
                Ready for <span className="text-brand-blue">Safer</span> Lens
                Insertion?
              </h2>
              <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
                Join thousands of users who have transformed their scleral lens
                experience with our smart technology. Get started today and see
                the difference.
              </p>

              <form 
                onSubmit={handleSubmit}
                className="flex flex-col max-w-md mx-auto gap-4 mb-8"
              >
                <div className="flex items-center gap-2 rounded-full border border-brand-blue/30 px-4 py-2">
                  <User className="text-brand-blue/70 h-5 w-5" />
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                
                <div className="flex items-center gap-2 rounded-full border border-brand-blue/30 px-4 py-2">
                  <Mail className="text-brand-blue/70 h-5 w-5" />
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Learn More</>
                  )}
                </Button>
              </form>

              <p className="text-sm text-brand-gray">
                By submitting, you agree to our{" "}
                <a href="#" className="text-brand-blue underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-brand-blue underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-200" className="mt-12">
          <div className="glass-card p-8 md:p-12 bg-white/70">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                <Smartphone className="text-brand-blue" />
                Get the Arify Mobile App
              </h3>
              <p className="text-brand-gray mb-6">
                Take your scleral lens experience to the next level with our free mobile app. Ease lens insertions, get ML-assisted face and eye tracking, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=app.arify" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <img 
                    src="/public/lovable-uploads/2d3b379e-a633-4bad-8faa-bec4e02abf35.png" 
                    alt="Get it on Google Play" 
                    className="h-14"
                  />
                </a>
                <Button variant="outline" disabled className="opacity-70">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.85 2.8C16.92 1.64 18.43 1.76 18.43 1.76C18.43 1.76 18.73 3.19 17.67 4.28C16.56 5.41 15.38 5.09 15.38 5.09C15.38 5.09 15.03 3.77 15.85 2.8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.85 13.67C16.91 13.67 18.85 11.67 18.85 9.09C18.85 6.91 16.56 6.51 16.56 6.51C16.56 6.51 14.52 6.52 14.52 8.53C14.52 10.66 14.77 13.67 15.85 13.67ZM9.89 22C11.01 22 11.77 21.15 13.02 21.15C14.3 21.15 14.84 21.98 16.04 21.98C17.21 21.98 18.18 20.68 19.1 19.41C20.14 17.96 20.58 16.54 20.61 16.44C20.61 16.41 20.55 16.41 20.48 16.41C19.4 16.41 18.36 17.37 17.92 17.37C17.45 17.37 17.02 16.74 16.14 16.74C15.22 16.74 14.69 17.4 13.69 17.4C12.69 17.4 12.19 16.78 11.29 16.78C10.33 16.78 9.39 17.67 8.44 19.17C7.78 20.22 7.44 21.57 7.44 22.83C7.44 22.87 7.47 22.93 7.5 22.93C7.6 22.93 8.73 22 9.89 22ZM18.3 13.12C18.3 13.05 18.23 13.02 18.17 13.02C18.1 13.02 17.89 13.12 17.66 13.12C17.13 13.12 16.69 12.38 16.19 11.51C15.73 10.68 15.19 9.63 15.19 8.8C15.19 8.28 15.29 8.11 15.49 7.89C15.69 7.66 16.13 7.47 16.44 7.47C16.47 7.47 16.5 7.44 16.5 7.41C16.5 7.24 15.69 5.9 15.09 5.9C14.88 5.9 14.78 5.97 14.65 6.07C14.52 6.17 14.32 6.31 14.05 6.31C13.85 6.31 13.69 6.21 13.52 6.14C13.36 6.04 13.16 5.97 12.92 5.97C11.69 5.97 10.93 7 10.53 7.94C10.33 8.42 10.13 9.09 10.13 9.96C10.13 11.72 11.09 13.67 12.05 13.67C12.39 13.67 12.59 13.57 12.79 13.47C12.99 13.37 13.19 13.27 13.49 13.27C13.79 13.27 13.95 13.37 14.15 13.47C14.39 13.57 14.62 13.67 14.95 13.67C15.58 13.67 16.16 13.12 16.89 11.95C17.36 11.15 17.57 10.42 17.7 9.93C17.7 9.89 17.66 9.89 17.63 9.89C17.5 9.89 16.79 10.15 16.56 10.15C16.19 10.15 15.93 9.82 15.59 9.45C15.29 9.12 14.92 8.73 14.92 8.04C14.92 7.31 15.26 6.91 15.83 6.91C15.9 6.91 15.93 6.88 15.93 6.84C15.93 6.74 15.83 6.48 15.83 6.17V6.14C15.83 5.97 15.9 5.9 16.1 5.9C16.26 5.9 16.53 5.97 16.69 5.97C16.89 5.97 16.96 5.9 16.96 5.8C16.96 5.53 16.56 5.05 16.16 4.75C15.93 4.58 15.66 4.45 15.39 4.48C15.36 4.48 15.36 4.45 15.36 4.41C15.36 4.35 15.46 4.28 15.49 4.25C15.89 3.88 16.62 3.57 17.23 3.57C18.9 3.57 19.8 4.55 19.8 6.27V11.41C19.8 11.58 19.83 11.89 19.83 12.09C19.83 12.59 19.63 13.09 19.13 13.09C18.9 13.09 18.6 13.02 18.3 13.12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3.38 22H5.9V17.03H8.27L11.91 22H15.03L10.88 16.4C12.35 15.77 13.3 14.35 13.3 12.33C13.3 9.21 11.24 7.6 7.57 7.6H3.38V22ZM5.9 15.02V9.61H7.45C9.61 9.61 10.71 10.53 10.71 12.33C10.71 14.13 9.62 15.02 7.45 15.02H5.9Z"
                      fill="currentColor"
                    />
                  </svg>
                  iOS Coming Soon
                </Button>
              </div>
              
              <p className="text-sm text-brand-gray">
                Our iOS app is coming soon.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-300" className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Us</h3>
              <p className="text-brand-gray">
                <a href="mailto:support@arify.net" className="text-brand-blue hover:text-brand-blue/80 transition-colors">
                  support@arify.net
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Visit Us</h3>
              <p className="text-brand-gray">
                <a href="https://www.arify.net" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                  www.arify.net
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://discord.gg/kHfVVMqh6K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.998-.608 1.435a19.97 19.97 0 0 0-5.989 0c-.164-.437-.397-1.044-.609-1.435a.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.94 1.473 3.832 2.373 5.684 2.975a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.105c-.614-.229-1.198-.504-1.765-.815a.077.077 0 0 1-.008-.128c.118-.088.237-.181.351-.276a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.114.095.233.188.351.275a.077.077 0 0 1-.006.129c-.567.311-1.152.585-1.766.815a.076.076 0 0 0-.041.105c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028c1.859-.601 3.751-1.501 5.693-2.975a.08.08 0 0 0 .03-.055c.5-5.094-.838-9.52-3.549-13.442a.062.062 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/arify-eyecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
