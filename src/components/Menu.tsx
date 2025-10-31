import { Coffee, Cookie, Sandwich, IceCream, Sparkles, Star, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

const menuCategories = [
  {
    icon: Coffee,
    title: 'Coffee',
    color: 'from-amber-600 to-amber-400',
    bgColor: 'bg-amber-900/20',
    borderColor: 'border-amber-500/30',
    items: [
      { name: 'Espresso', price: '₹99', description: 'Rich and bold single shot espresso', popular: true },
      { name: 'Americano', price: '₹129', description: 'Classic black coffee with hot water' },
      { name: 'Cappuccino', price: '₹149', description: 'Perfect foam art, every time', popular: true },
      { name: 'Latte', price: '₹169', description: 'Smooth and creamy perfection' },
      { name: 'Caramel Macchiato', price: '₹179', description: 'Sweet caramel with espresso' },
      { name: 'Cold Brew', price: '₹159', description: 'Refreshing and smooth cold coffee' },
    ]
  },
  {
    icon: Sandwich,
    title: 'Food',
    color: 'from-orange-600 to-orange-400',
    bgColor: 'bg-orange-900/20',
    borderColor: 'border-orange-500/30',
    items: [
      { name: 'Club Sandwich', price: '₹249', description: 'Classic triple-decker with chicken', popular: true },
      { name: 'Paneer Tikka Wrap', price: '₹199', description: 'Spiced grilled paneer in tortilla' },
      { name: 'Chicken Burger', price: '₹279', description: 'Juicy grilled chicken patty' },
      { name: 'Pasta Alfredo', price: '₹229', description: 'Creamy Italian comfort food' },
      { name: 'Loaded Nachos', price: '₹189', description: 'Crispy nachos with cheese & salsa' },
      { name: 'Pizza Margherita', price: '₹299', description: 'Fresh basil, mozzarella & tomato' },
    ]
  },
  {
    icon: Cookie,
    title: 'Desserts',
    color: 'from-rose-600 to-rose-400',
    bgColor: 'bg-rose-900/20',
    borderColor: 'border-rose-500/30',
    items: [
      { name: 'Chocolate Brownie', price: '₹149', description: 'Warm fudgy brownie with ice cream', popular: true },
      { name: 'Cheesecake', price: '₹179', description: 'Creamy New York style cheesecake' },
      { name: 'Red Velvet Cake', price: '₹169', description: 'Rich and velvety slice of heaven' },
      { name: 'Tiramisu', price: '₹189', description: 'Classic Italian coffee-flavored treat' },
      { name: 'Apple Pie', price: '₹159', description: 'Homemade with cinnamon & love' },
    ]
  },
  {
    icon: IceCream,
    title: 'Beverages',
    color: 'from-teal-600 to-teal-400',
    bgColor: 'bg-teal-900/20',
    borderColor: 'border-teal-500/30',
    items: [
      { name: 'Oreo Shake', price: '₹179', description: 'Thick shake with Oreo cookies' },
      { name: 'Mango Smoothie', price: '₹159', description: 'Fresh mango with yogurt', popular: true },
      { name: 'Chocolate Frappe', price: '₹189', description: 'Icy chocolate indulgence' },
      { name: 'Fresh Lime Soda', price: '₹89', description: 'Refreshing citrus fizz' },
      { name: 'Iced Tea', price: '₹99', description: 'Chilled tea with lemon' },
    ]
  },
];

const specialOffers = [
  { title: "Happy Hours", time: "3 PM - 6 PM", offer: "Buy 1 Get 1 Free on all beverages" },
  { title: "Weekend Special", time: "Sat & Sun", offer: "20% off on food combos" },
  { title: "Student Discount", time: "All Day", offer: "15% off with valid student ID" },
];

export default function Menu() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="menu" className="relative py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
      {/* Enhanced Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-600 to-rose-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full filter blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full mb-8 backdrop-blur-sm border border-amber-500/30 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-amber-300 uppercase tracking-widest">Our Menu</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Delicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Offerings</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 mx-auto rounded-full mb-8 shadow-lg shadow-amber-500/50"></div>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of premium beverages, gourmet food, and indulgent treats
          </p>
        </div>

        {/* Menu Action Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 overflow-hidden relative"
          >
            <span className="relative z-10">{showFullMenu ? 'Show Less' : 'View Full Menu'}</span>
            <ExternalLink className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-stone-800 border-2 border-amber-500/30 text-amber-400 font-bold rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Special Offers Banner */}
        <div className="mb-16 grid md:grid-cols-3 gap-4">
          {specialOffers.map((offer, idx) => (
            <div key={idx} className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 text-center backdrop-blur-sm hover:scale-105 transition-transform">
              <h4 className="text-amber-400 font-bold text-lg mb-2">{offer.title}</h4>
              <p className="text-stone-300 text-sm mb-2">{offer.time}</p>
              <p className="text-white font-medium">{offer.offer}</p>
            </div>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {menuCategories.slice(0, showFullMenu ? menuCategories.length : 2).map((category, idx) => (
            <div 
              key={idx} 
              className={`group relative ${category.bgColor} backdrop-blur-sm border-2 ${category.borderColor} rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-stone-400 text-sm">Fresh & Premium Quality</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-stone-400 text-sm">Starting from</p>
                  <p className="text-amber-400 text-xl font-bold">₹{Math.min(...category.items.map(item => Number.parseInt(item.price.replace('₹', ''), 10)))}</p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-4 relative z-10">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group/item flex justify-between items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border-b border-stone-700/30 last:border-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-semibold text-white group-hover/item:text-amber-400 transition-colors">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-full">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span className="text-xs text-amber-400 font-bold">POPULAR</span>
                          </span>
                        )}
                      </div>
                      <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full filter blur-2xl group-hover:opacity-10 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800/50 border border-stone-700/50 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-stone-300 text-sm font-medium">All prices inclusive of taxes • Custom orders welcome</span>
          </div>
          <p className="text-stone-500 text-sm max-w-2xl mx-auto">
            For dietary restrictions, allergies, or special requests, please inform our staff. 
            We're happy to customize your order to make your experience perfect.
          </p>
        </div>
      </div>
    </section>
  );
}
