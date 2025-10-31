import { MapPin, Phone, Mail, Clock, Instagram, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-stone-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6 backdrop-blur-sm border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Us</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            We're here to serve you the perfect cup and create unforgettable moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Location</h3>
                  <p className="text-stone-300 text-base leading-relaxed mb-1">
                    <span className="font-semibold text-amber-400">16th Floor, Biscomaun Bhawan</span>
                  </p>
                  <p className="text-stone-300 text-sm leading-relaxed mb-3">
                    West Gandhi Maidan, Raja Ji Salai, Lodipur<br />
                    Patna, Bihar 800001
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Biscomaun+Bhawan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 group/link hover:gap-3 transition-all"
                  >
                    <span className="text-sm font-medium">View on map</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Opening Hours</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-stone-300 text-lg">Monday - Sunday</p>
                      <p className="text-amber-400 text-lg font-semibold">12:00 PM - 12:00 AM</p>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                      <span className="text-xs text-amber-300 font-medium">🎉 Winter Hours from Nov 1st</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Phone</h3>
                  <p className="text-stone-300 text-lg">Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/infinitycafepatna/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group/link"
                  >
                    <span className="text-lg font-medium">@infinitycafepatna</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Email</h3>
                  <a 
                    href="mailto:info@infinitycafe.com" 
                    className="text-stone-300 text-lg hover:text-amber-400 transition-colors"
                  >
                    info@infinitycafe.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl transform rotate-3"></div>
            <div className="relative h-[600px] bg-stone-800 rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50 hover:rotate-0 transition-transform duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.984872954595!2d85.13515631501648!3d25.611917983731774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584a7b1a0e69%3A0x4c6c92f0b7f8e8a8!2sBiscomaun%20Bhawan!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Infinity Cafe - Biscomaun Bhawan, 16th Floor, Patna"
              ></iframe>
              
              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900 via-stone-900/95 to-transparent p-6 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg mb-1">🗺️ Biscomaun Bhawan</p>
                    <p className="text-stone-300 text-sm">West Gandhi Maidan, Patna</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Biscomaun+Bhawan,+West+Gandhi+Maidan,+Patna,+Bihar+800001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/50"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
