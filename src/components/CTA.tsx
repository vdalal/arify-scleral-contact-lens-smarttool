
import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { MobileIcon, TabletSmartphone } from "lucide-react";

const CTA: React.FC = () => {
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

              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-full border border-brand-blue/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 min-w-[250px]"
                />
                <Button className="btn-primary">Request Demo</Button>
              </div>

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
          <div className="glass-card p-8 bg-white/70">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <TabletSmartphone className="h-16 w-16 text-brand-blue mb-4" />
                <h3 className="text-2xl font-medium mb-3">Mobile Arify App</h3>
                <p className="text-brand-gray mb-4">
                  Take your scleral lens experience to the next level with our mobile app. 
                  Get personalized guidance, track your lens usage, and receive alerts for lens replacement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span>Real-time lens insertion guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span>Personalized wear schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span>Smart notifications</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button className="bg-black text-white hover:bg-black/80">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5640855,0 L6.43591449,0 C5.0917042,0 4,1.0917042 4,2.43591449 L4,21.5640855 C4,22.9082958 5.0917042,24 6.43591449,24 L17.5640855,24 C18.9082958,24 20,22.9082958 20,21.5640855 L20,2.43591449 C20,1.0917042 18.9082958,0 17.5640855,0 Z M12,23 C11.1715729,23 10.5,22.3284271 10.5,21.5 C10.5,20.6715729 11.1715729,20 12,20 C12.8284271,20 13.5,20.6715729 13.5,21.5 C13.5,22.3284271 12.8284271,23 12,23 Z M17,17.5 C17,17.7761424 16.7761424,18 16.5,18 L7.5,18 C7.22385763,18 7,17.7761424 7,17.5 L7,2.5 C7,2.22385763 7.22385763,2 7.5,2 L16.5,2 C16.7761424,2 17,2.22385763 17,2.5 L17,17.5 Z" />
                    </svg>
                    App Store
                  </Button>
                  <Button className="bg-black text-white hover:bg-black/80">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.92287093,2.08424021 L13.8864153,12.047785 L3.92287093,21.9157598 C3.80936197,21.7707692 3.75,21.5990261 3.75,21.4230769 L3.75,2.57692308 C3.75,2.40097388 3.80936197,2.22923077 3.92287093,2.08424021 Z M15.0023228,13.1636921 L20.2681368,8.84615385 L16.5,6.69856835 L15.0023228,13.1636921 Z M15.0023228,10.9318779 L16.5,17.3014317 L20.2681368,15.1538462 L15.0023228,10.9318779 Z M13.8864153,13.956989 L5.97212935,21.8713748 L15.0728636,21.8713748 C15.2488128,21.8713748 15.4205559,21.8120128 15.5655465,21.6985038 L17.7131379,16.1865239 L13.8864153,13.956989 Z M5.97212935,2.12862524 L13.8864153,10.043011 L17.7131379,7.81347613 L15.5655465,2.3014962 C15.4205559,2.18798724 15.2488128,2.12862524 15.0728636,2.12862524 L5.97212935,2.12862524 Z" />
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-400 rounded-[40px] blur-lg opacity-20"></div>
                  <div className="relative bg-black rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-xl">
                    <div className="pt-6 px-2">
                      <div className="w-20 h-4 mx-auto rounded-full bg-black border-[1px] border-gray-700 mb-2"></div>
                      <div className="aspect-[9/19] rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-brand-blue/10 to-blue-100/30 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-brand-blue/20 flex items-center justify-center">
                              <MobileIcon className="w-6 h-6 text-brand-blue" />
                            </div>
                            <p className="text-xs text-brand-gray">Arify Mobile App</p>
                            <p className="text-[10px] text-brand-gray/70">FDA Class 1 • AI/ML-Powered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay="delay-300" className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Us</h3>
              <p className="text-brand-gray">
                support@arify.net
                <br />
                +1 (800) 555-0123
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Visit Us</h3>
              <p className="text-brand-gray">
                123 Innovation Drive
                <br />
                San Francisco, CA 94107
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
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
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
