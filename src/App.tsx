import React, { useState } from 'react';
import { 
  MapPin, Phone, Clock, Search, Menu, X, Star,
  Bed, Bath, Maximize, Home, Key, Briefcase, Facebook, Twitter, Instagram, Linkedin,
  ChevronRight, ArrowRight
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample Featured Listings
  const listings = [
    {
      id: 1,
      title: "Villa Lumina",
      location: "Star Island, Miami Beach",
      price: "$12,500,000",
      beds: 6,
      baths: 7.5,
      sqft: "8,500",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      featured: true
    },
    {
      id: 2,
      title: "Oceanfront Penthouse",
      location: "South Beach, Miami",
      price: "$8,900,000",
      beds: 4,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      featured: false
    },
    {
      id: 3,
      title: "Modern Bay Estate",
      location: "Venetian Islands, Miami",
      price: "$15,200,000",
      beds: 7,
      baths: 8,
      sqft: "10,200",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
      featured: true
    }
  ];

  // User-provided Testimonials
  const testimonials = [
    {
      name: "Sarah Jenkins",
      text: "They found us our dream waterfront property in record time! The whole process was seamless and incredibly professional.",
      rating: 5
    },
    {
      name: "David & Maria Rodriguez",
      text: "Unmatched knowledge of the Miami Beach market. They were attentive and truly understood what we were looking for in a luxury condo.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      text: "Professional, attentive, and they negotiated a great price for our new home. We couldn't be happier with their white-glove service.",
      rating: 5
    }
  ];

  // Services Offered
  const services = [
    {
      icon: <Home className="w-8 h-8 text-amber-500" />,
      title: "Property Sales",
      description: "Exclusive access to the most coveted waterfront and luxury properties in the Miami area."
    },
    {
      icon: <Key className="w-8 h-8 text-amber-500" />,
      title: "Premium Rentals",
      description: "Find the perfect seasonal or long-term high-end rental property to fit your lifestyle."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      title: "Consultations",
      description: "Expert market analysis and investment guidance based on decades of local experience."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A2E44] overflow-x-hidden selection:bg-[#C5A059]/20 selection:text-[#1A2E44]">
      
      {/* Top Utility Bar */}
      <div className="bg-[#FDFCFB] text-[#1A2E44] py-2 text-[10px] uppercase font-bold tracking-widest hidden md:block border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex justify-between items-center">
          <div className="flex space-x-6 opacity-60">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2" /> 33139 Miami Beach, FL</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-2" /> Opens at 9 AM</span>
          </div>
          <div className="flex space-x-4 opacity-60">
            <a href="#" aria-label="Facebook" className="hover:text-[#C5A059] transition-colors"><Facebook className="w-3 h-3" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#C5A059] transition-colors"><Instagram className="w-3 h-3" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#C5A059] transition-colors"><Linkedin className="w-3 h-3" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FDFCFB] sticky top-0 z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-20 flex justify-between items-center">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1A2E44]">MIAMI</span>
            <span className="font-serif text-2xl font-light text-[#C5A059]">REAL ESTATE</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="text-[#1A2E44] hover:text-[#C5A059] transition-colors">Advisory</a>
            <a href="#services" className="text-[#1A2E44] hover:text-[#C5A059] transition-colors">Services</a>
            <a href="#listings" className="text-[#1A2E44] hover:text-[#C5A059] transition-colors">Listings</a>
            <a href="#testimonials" className="text-[#1A2E44] hover:text-[#C5A059] transition-colors">Journal</a>
            <a href="#contact" className="ml-4 px-6 py-4 bg-[#1A2E44] text-white hover:bg-[#C5A059] transition-colors font-bold flex items-center">
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#1A2E44] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FDFCFB] border-t border-black/5 px-4 py-4 space-y-2 absolute w-full left-0 z-40 text-xs font-semibold uppercase tracking-widest shadow-xl shadow-black/10">
            <a href="#about" className="block text-[#1A2E44] py-3 hover:text-[#C5A059]" onClick={() => setIsMobileMenuOpen(false)}>Advisory</a>
            <a href="#services" className="block text-[#1A2E44] py-3 hover:text-[#C5A059]" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#listings" className="block text-[#1A2E44] py-3 hover:text-[#C5A059]" onClick={() => setIsMobileMenuOpen(false)}>Listings</a>
            <a href="#testimonials" className="block text-[#1A2E44] py-3 hover:text-[#C5A059]" onClick={() => setIsMobileMenuOpen(false)}>Journal</a>
            <a href="#contact" className="block text-[#1A2E44] py-3 hover:text-[#C5A059] font-bold border-t border-black/5 mt-2 pt-4" onClick={() => setIsMobileMenuOpen(false)}>Book Consultation</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center left-0 w-full overflow-hidden">
        {/* Background Overlay effect */}
        <div className="absolute right-0 top-0 w-[60%] h-full z-0 bg-[#1A2E44] flex relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB] from-5% to-transparent z-10 hidden lg:block"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-12 relative z-10 flex">
          <div className="w-full lg:w-2/3 py-24">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#2A9D8F] mb-6 block">
              Exclusive Miami Beach Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.9] text-[#1A2E44] mb-8">
              Redefining <br/><span className="italic text-[#C5A059]">Coastal</span> Living.
            </h1>
            <p className="max-w-md text-sm md:text-base leading-relaxed opacity-80 mb-10 text-[#1A2E44]">
              Expert guidance in the Miami Beach luxury market. We bridge the gap between architectural excellence and your next home.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="bg-[#1A2E44] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#C5A059] transition-colors">
                Explore Properties
              </button>
              <button className="border border-[#1A2E44] text-[#1A2E44] px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-black/5 transition-colors">
                Book Consultation
              </button>
            </div>
            
            {/* Quick Search Widget */}
            <div className="w-full max-w-2xl bg-white p-4 shadow-sm border border-black/5 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center">
              <div className="flex-1 w-full sm:border-r border-black/10 sm:pr-4 flex flex-col justify-center">
                <span className="block text-[10px] uppercase opacity-50 font-bold mb-1 text-[#1A2E44]">Location</span>
                <select className="w-full bg-transparent text-sm font-medium outline-none cursor-pointer text-[#1A2E44] pb-1 border-b border-black/10 sm:border-none focus:border-[#C5A059]">
                  <option value="">Select Neighborhood</option>
                  <option value="south-beach">South Beach</option>
                  <option value="bal-harbour">Bal Harbour</option>
                  <option value="star-island">Star Island</option>
                </select>
              </div>
              <div className="flex-1 w-full sm:pl-4 flex flex-col justify-center">
                <span className="block text-[10px] uppercase opacity-50 font-bold mb-1 text-[#1A2E44]">Property Type</span>
                <select className="w-full bg-transparent text-sm font-medium outline-none cursor-pointer text-[#1A2E44] pb-1 border-b border-black/10 sm:border-none focus:border-[#C5A059]">
                  <option value="">Any Type</option>
                  <option value="house">Single Family Home</option>
                  <option value="condo">Condo / Penthouse</option>
                  <option value="land">Lot / Land</option>
                </select>
              </div>
              <button className="bg-[#C5A059] p-4 text-white hover:bg-[#b08d4a] transition-colors shrink-0 w-full sm:w-auto flex justify-center mt-2 sm:mt-0 sm:ml-4">
                <Search className="w-5 h-5 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#FDFCFB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image side */}
            <div className="relative group">
              {/* Editorial offset frame */}
              <div className="absolute inset-0 border border-black/10 transform translate-x-6 translate-y-6 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern luxury interior" 
                className="relative z-10 w-full object-cover h-[500px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-black/5 z-20 hidden md:flex flex-col items-center justify-center max-w-[200px] shadow-sm">
                <span className="text-5xl font-serif text-[#1A2E44] mb-2">15</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] text-center">Years of Excellence</span>
              </div>
            </div>
            
            {/* Content side */}
            <div className="lg:pr-8">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">About Our Agency</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E44] mb-8 leading-[1.1]">Your Trusted Advisors in Miami Real Estate</h2>
              
              <div className="space-y-6 text-sm opacity-80 leading-relaxed text-[#1A2E44]">
                <p>
                  Located in the vibrant heart of Miami Beach, our boutique real estate agency provides exceptional, white-glove service to local and international clients seeking premier South Florida properties.
                </p>
                <p>
                  With an expansive portfolio spanning Star Island estates to Brickell penthouses, we offer unparalleled market knowledge, discreet representation, and a commitment to matching you with a property that perfectly complements your lifestyle.
                </p>
              </div>
              
              <div className="mt-10 flex gap-4">
                <a href="#contact" className="border-b border-[#1A2E44] pb-1 text-[#1A2E44] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors text-xs font-bold uppercase tracking-widest group flex items-center">
                  Consult With Us <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E44] mb-6">World-Class Services</h2>
            <p className="text-sm opacity-80 text-[#1A2E44]">Comprehensive real estate solutions tailored to the luxury market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-black/5">
            {services.map((service, index) => (
              <div key={index} className={`bg-white p-12 transition-colors duration-500 group flex flex-col items-start ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-black/5' : ''}`}>
                <div className="mb-8 text-[#1A2E44] opacity-50 group-hover:opacity-100 group-hover:text-[#C5A059] transition-all duration-500">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-serif text-[#1A2E44] mb-4">{service.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed text-[#1A2E44] mb-12 flex-1">
                  {service.description}
                </p>
                <a href="#contact" className="text-[#C5A059] font-bold uppercase text-[10px] tracking-widest inline-flex items-center transition-colors">
                  Learn more <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-black/5">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E44]">Featured Residences</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center border-b border-[#1A2E44] pb-1 text-[#1A2E44] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors text-xs font-bold uppercase tracking-widest group">
              Explore Portfolio <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {listings.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <div className="relative h-[400px] overflow-hidden mb-6 border border-black/5 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-[1.5s] ease-in-out" />
                  
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-[#1A2E44] text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[#1A2E44] font-bold px-4 py-3 shadow-md tracking-wider text-sm">
                    {item.price}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif text-[#1A2E44] mb-2">{item.title}</h3>
                  <div className="flex items-center text-[#1A2E44] opacity-60 text-xs mb-6 uppercase tracking-widest">
                    <MapPin className="w-3 h-3 mr-2" /> {item.location}
                  </div>
                  
                  {/* Property Details row */}
                  <div className="flex justify-between items-center py-4 border-t border-black/5 mt-auto mb-6">
                    <div className="flex items-center text-[#1A2E44] opacity-80 text-[10px] uppercase font-bold tracking-widest">
                      <span>{item.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-[#1A2E44] opacity-80 text-[10px] uppercase font-bold tracking-widest">
                      <span>{item.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-[#1A2E44] opacity-80 text-[10px] uppercase font-bold tracking-widest">
                      <span>{item.sqft} SQFT</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 border border-[#1A2E44] text-[#1A2E44] font-bold uppercase tracking-widest text-[10px] hover:bg-[#1A2E44] hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
             <a href="#" className="inline-flex items-center border-b border-[#1A2E44] pb-1 text-[#1A2E44] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors text-xs font-bold uppercase tracking-widest group">
              Explore Portfolio <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#1A2E44] text-white relative flex justify-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full relative z-10">
          <div className="mb-16 border-b border-white/10 pb-8 flex flex-col items-center">
            <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest text-center">What Clients Say</span>
            <h2 className="text-4xl md:text-5xl font-serif text-center">Client Experiences</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((review, index) => (
              <div key={index} className={`flex flex-col relative ${index !== 2 ? 'md:border-r border-white/10 md:pr-12' : ''}`}>
                <QuoteIcon className="absolute -top-4 -left-4 w-12 h-12 text-white/5" />
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C5A059] fill-current" />
                  ))}
                </div>
                <p className="text-sm opacity-80 leading-relaxed italic relative z-10 flex-1 mb-8">"{review.text}"</p>
                
                <div className="mt-auto">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">{review.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">Miami Beach Client</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section id="service-area" className="py-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-black/5">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Territory</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E44]">Our Service Area</h2>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center border-b border-[#1A2E44] pb-1 text-[#1A2E44] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors text-xs font-bold uppercase tracking-widest group">
              Inquire About A Location <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-white p-4 border border-black/5 shadow-sm">
            <div className="w-full h-[450px] border border-black/5 grayscale hover:grayscale-0 transition-all duration-[1s]">
              <iframe
                title="Miami Beach Service Area"
                src="https://maps.google.com/maps?q=Miami%20Beach,%20FL&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 pb-4 px-4">
              <div className="border-l border-[#C5A059] pl-4">
                <h4 className="font-serif text-lg text-[#1A2E44] mb-1">Miami Beach</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Primary Market</p>
              </div>
              <div className="border-l border-black/10 pl-4 transition-colors hover:border-[#C5A059]">
                <h4 className="font-serif text-lg text-[#1A2E44] mb-1">Bal Harbour</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Luxury Condos</p>
              </div>
              <div className="border-l border-black/10 pl-4 transition-colors hover:border-[#C5A059]">
                <h4 className="font-serif text-lg text-[#1A2E44] mb-1">Star Island</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Estate Homes</p>
              </div>
              <div className="border-l border-black/10 pl-4 transition-colors hover:border-[#C5A059]">
                <h4 className="font-serif text-lg text-[#1A2E44] mb-1">Brickell</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Urban Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#FDFCFB] relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 bg-white border border-black/5 flex flex-col md:flex-row shadow-sm">
          
          {/* Contact Info Pane */}
          <div className="md:w-1/3 bg-[#1A2E44] p-12 lg:p-16 text-white flex flex-col">
            <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Direct Connect</span>
            <h3 className="text-3xl font-serif mb-6">Concierge Advisory</h3>
            <p className="text-sm opacity-70 mb-12 leading-relaxed">Schedule a private consultation or request detailed property portfolios.</p>
            
            <div className="space-y-12 mt-auto">
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">Office Location</h4>
                <p className="text-sm opacity-80 leading-relaxed">Miami Real Estate<br />Miami Beach, FL 33139</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">Direct Line</h4>
                <p className="text-sm opacity-80">(305) 555-0123</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Pane */}
          <div className="md:w-2/3 p-12 lg:p-16 pb-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A2E44]/5 -skew-x-12 transform translate-x-12 -translate-y-4"></div>
            <h3 className="text-3xl font-serif text-[#1A2E44] mb-12">Submit Inquiry</h3>
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="border-b border-black/20 pb-2 flex">
                  <input type="text" className="w-full bg-transparent outline-none text-[#1A2E44] text-sm placeholder-[#1A2E44]/40" placeholder="First Name" />
                </div>
                <div className="border-b border-black/20 pb-2 flex">
                  <input type="text" className="w-full bg-transparent outline-none text-[#1A2E44] text-sm placeholder-[#1A2E44]/40" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="border-b border-black/20 pb-2 flex">
                  <input type="email" className="w-full bg-transparent outline-none text-[#1A2E44] text-sm placeholder-[#1A2E44]/40" placeholder="Email Address" />
                </div>
                <div className="border-b border-black/20 pb-2 flex">
                  <input type="tel" className="w-full bg-transparent outline-none text-[#1A2E44] text-sm placeholder-[#1A2E44]/40" placeholder="Phone Number" />
                </div>
              </div>
              <div className="border-b border-black/20 pb-2 flex">
                <textarea rows={3} className="w-full bg-transparent outline-none text-[#1A2E44] text-sm placeholder-[#1A2E44]/40 resize-none" placeholder="How can we assist you?"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-5 bg-[#C5A059] hover:bg-[#b08d4a] text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-center items-center">
                Request Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2E44] text-white py-16 lg:py-20 border-t border-white/10 shrink-0">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Col */}
            <div className="lg:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Advisors</span>
              <p className="text-[12px] italic opacity-80 leading-relaxed">We bridge the gap between architectural excellence and your next waterfront home.</p>
            </div>
            
            {/* Links Col 1 */}
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Specialized Services</span>
              <ul className="text-xs space-y-3 opacity-80 font-medium">
                <li className="flex justify-between items-center hover:text-[#C5A059] cursor-pointer transition-colors"><span>Luxury Sales</span><span>•</span></li>
                <li className="flex justify-between items-center hover:text-[#C5A059] cursor-pointer transition-colors"><span>Seasonal Rentals</span><span>•</span></li>
                <li className="flex justify-between items-center hover:text-[#C5A059] cursor-pointer transition-colors"><span>Market Valuation</span><span>•</span></li>
                <li className="flex justify-between items-center hover:text-[#C5A059] cursor-pointer transition-colors"><span>Investment Advisory</span><span>•</span></li>
              </ul>
            </div>
            
            {/* Links Col 2 */}
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-4 block tracking-widest">Key Neighborhoods</span>
              <ul className="text-xs space-y-3 opacity-80 font-medium">
                <li className="hover:text-[#C5A059] cursor-pointer transition-colors">South Beach</li>
                <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Star Island</li>
                <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Bal Harbour</li>
                <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Venetian Islands</li>
              </ul>
            </div>
            
            {/* Direct Connect Col */}
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C5A059] mb-3 block tracking-widest">Direct Connect</span>
              <p className="text-2xl font-serif">305.555.0199</p>
              <p className="text-[10px] opacity-60 mt-2 uppercase tracking-widest">concierge@miamire.com</p>
              <div className="mt-8 flex gap-4 opacity-70">
                <a href="#" className="text-[9px] uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors hover:opacity-100">Instagram</a>
                <a href="#" className="text-[9px] uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors hover:opacity-100">LinkedIn</a>
                <a href="#" className="text-[9px] uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors hover:opacity-100">Facebook</a>
              </div>
            </div>
            
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-50 font-bold">
            <p>&copy; {new Date().getFullYear()} Miami Real Estate.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href="https://auroraadv.co/?tab=wizard" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#C5A059] text-white rounded-full w-[130px] h-[130px] flex items-center justify-center text-center p-4 shadow-2xl hover:bg-[#1A2E44] transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl border-4 border-[#FDFCFB]/50"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
          Get this<br/>website<br/>for only<br/><span className="text-lg mt-1 block">$999</span>
        </span>
      </a>
    </div>
  );
}

// Icon Component helper for quoting
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.714V13c0 4.148-1.5 4.82-5 4.82V21zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.714V13c0 4.148-1.5 4.82-5 4.82V21z"/>
    </svg>
  );
}
