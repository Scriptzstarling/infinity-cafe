import { Camera, Sparkles } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Coffee art',
    title: 'Artisan Coffee'
  },
  {
    url: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cafe ambiance',
    title: 'Cozy Ambiance'
  },
  {
    url: 'https://images.pexels.com/photos/1833769/pexels-photo-1833769.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh pastries',
    title: 'Fresh Pastries'
  },
  {
    url: 'https://images.pexels.com/photos/1546039/pexels-photo-1546039.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Coffee brewing',
    title: 'Coffee Brewing'
  },
  {
    url: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Delicious food',
    title: 'Delicious Food'
  },
  {
    url: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cafe interior',
    title: 'Cafe Interior'
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-white to-stone-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Camera className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Gallery</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
            Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Moments</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-stone-700 max-w-2xl mx-auto">
            Step inside and experience the Infinity Cafe vibe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.alt}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  </div>
                  <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 text-lg mb-6">
            Follow us on Instagram for more amazing moments
          </p>
          <a
            href="https://www.instagram.com/infinitycafepatna/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Camera className="w-5 h-5" />
            View on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
