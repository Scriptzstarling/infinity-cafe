import { Heart, Users, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
            Our Story
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-4xl font-bold text-stone-900 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Infinity Cafe</span>
            </h3>
            <p className="text-lg text-stone-700 leading-relaxed">
              Nestled in the heart of Patna, Infinity Cafe is more than just a place to grab coffee.
              It's a sanctuary where moments become memories, conversations flow freely, and every cup
              is crafted with passion.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              We believe in the infinite possibilities that emerge when good people gather over great coffee.
              Our carefully curated menu, warm ambiance, and dedicated team create an experience that keeps
              you coming back for more.
            </p>
            <div className="flex items-center gap-8 pt-6">
              <div>
                <p className="text-4xl font-bold text-amber-600">100+</p>
                <p className="text-sm text-stone-600 font-medium">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div>
                <p className="text-4xl font-bold text-amber-600">50+</p>
                <p className="text-sm text-stone-600 font-medium">Menu Items</p>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div>
                <p className="text-4xl font-bold text-amber-600">5★</p>
                <p className="text-sm text-stone-600 font-medium">Rated</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3"></div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cafe Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-4">Made with Love</h4>
              <p className="text-stone-600 leading-relaxed">Every item on our menu is prepared with care and the finest ingredients</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-4">Community First</h4>
              <p className="text-stone-600 leading-relaxed">A welcoming space where everyone feels at home and connections flourish</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-4">Premium Quality</h4>
              <p className="text-stone-600 leading-relaxed">We source only the best beans and ingredients for an exceptional experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
