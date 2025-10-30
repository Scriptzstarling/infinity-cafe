import { Coffee, Cookie, Sandwich, IceCream, Sparkles, Star } from 'lucide-react';

const menuCategories = [
  {
    icon: Coffee,
    title: 'Coffee',
    color: 'from-amber-600 to-amber-400',
    items: [
      { name: 'Espresso', price: '₹80', description: 'Rich and bold single shot', popular: true },
      { name: 'Cappuccino', price: '₹120', description: 'Perfect foam art, every time', popular: true },
      { name: 'Latte', price: '₹140', description: 'Smooth and creamy perfection' },
      { name: 'Cold Brew', price: '₹150', description: 'Refreshing and smooth' },
    ]
  },
  {
    icon: Sandwich,
    title: 'Food',
    color: 'from-orange-600 to-orange-400',
    items: [
      { name: 'Club Sandwich', price: '₹180', description: 'Classic triple-decker delight', popular: true },
      { name: 'Paneer Tikka Wrap', price: '₹160', description: 'Spiced and grilled to perfection' },
      { name: 'Pasta Alfredo', price: '₹200', description: 'Creamy Italian comfort' },
      { name: 'Loaded Fries', price: '₹140', description: 'Crispy fries with toppings' },
    ]
  },
  {
    icon: Cookie,
    title: 'Desserts',
    color: 'from-rose-600 to-rose-400',
    items: [
      { name: 'Chocolate Brownie', price: '₹120', description: 'Warm and fudgy', popular: true },
      { name: 'Cheesecake', price: '₹150', description: 'Creamy New York style' },
      { name: 'Red Velvet Cake', price: '₹140', description: 'Rich and velvety' },
      { name: 'Tiramisu', price: '₹160', description: 'Classic Italian treat' },
    ]
  },
  {
    icon: IceCream,
    title: 'Shakes & Smoothies',
    color: 'from-teal-600 to-teal-400',
    items: [
      { name: 'Oreo Shake', price: '₹150', description: 'Cookies and cream bliss' },
      { name: 'Mango Smoothie', price: '₹130', description: 'Tropical freshness', popular: true },
      { name: 'Chocolate Frappe', price: '₹160', description: 'Icy chocolate indulgence' },
      { name: 'Berry Blast', price: '₹140', description: 'Mixed berries goodness' },
    ]
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-stone-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6 backdrop-blur-sm border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Our Menu</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Delicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Offerings</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Discover our carefully crafted selection of beverages, food, and treats
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-3xl p-8 hover:bg-stone-800 hover:border-stone-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br opacity-5 rounded-full filter blur-2xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-8 relative">
                <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6 relative">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group/item border-b border-stone-700/50 pb-5 last:border-0 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div className="flex items-center gap-3 flex-1">
                        <h4 className="text-xl font-semibold text-white group-hover/item:text-amber-400 transition-colors">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span className="text-xs text-amber-400 font-medium">Popular</span>
                          </span>
                        )}
                      </div>
                      <span className="text-xl font-bold text-amber-400 flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-stone-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 text-lg">
            All prices are inclusive of taxes • Customization available on request
          </p>
        </div>
      </div>
    </section>
  );
}
