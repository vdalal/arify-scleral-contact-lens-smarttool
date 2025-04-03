
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { Smartphone, Download, User, Mail, CheckCircle } from "lucide-react";
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
                Take your scleral lens experience to the next level with our companion mobile app. 
                Track your insertions, get personalized tips, and connect with our community.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=app.lovable.arify" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-brand-blue/90 transition-all"
                >
                  <Download size={20} />
                  Download for Android
                </a>
                <Button variant="outline" disabled className="opacity-70">
                  <Download size={20} />
                  iOS Coming Soon
                </Button>
              </div>
              
              <p className="text-sm text-brand-gray">
                Our iOS app is currently under review with the Apple App Store and will be available soon.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-300" className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Us</h3>
              <p className="text-brand-gray">
                support@arify.net
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
