import React, { useState, useEffect } from 'react';
import logo from './star-perde-logo.jpeg';
import { FaInstagram } from "react-icons/fa";
import { 
  Search, Phone, Menu, MessageCircle, 
  MapPin, ChevronLeft, ChevronRight, X, Mail 
} from 'lucide-react';

const CATEGORIES = [
  "Tül Perde", "Stor Perde", "Zebra Perde", "Fon Perde", 
  "Jaluzi Perde", "Plise Perde", "Dikey Tül Perde", 
  "Balkon Perdesi", "Perde Aksesuarları", "Ev Tekstil"
];

const FABRIC_TYPES = [
  {
    title: "Tül Perde",
    description: "Hafif ve şeffaf yapısıyla mekana ferahlık katar. Gün ışığını yumuşatarak içeri alır.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Blackout (Karartma)",
    description: "Işığı %100'e kadar keserek tam karanlık sağlar. Yatak odaları ve sinema odaları için idealdir.",
    image: "https://images.unsplash.com/photo-1542004245-70335e971d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Keten Kumaşlar",
    description: "Doğal dokusuyla rüstik ve modern alanlara uyum sağlar. Odanıza organik bir hava katar.",
    image: "https://images.unsplash.com/photo-1584288414436-4767178a9c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Saten Kumaşlar",
    description: "Parlak ve pürüzsüz yüzeyi ile lüks bir görünüm sunar. Klasik ve şık dekorasyonların vazgeçilmezidir.",
    image: "https://images.unsplash.com/photo-1594912952520-25fc2521bc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Kadife Kumaşlar",
    description: "Kalın ve yumuşak dokusuyla kış aylarında sıcak bir atmosfer yaratır. Zengin bir duruş sergiler.",
    image: "https://images.unsplash.com/photo-1588661621303-366a7b72db54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pamuklu Kumaşlar",
    description: "Günlük kullanım için ideal, nefes alabilen ve kolay temizlenen yapıdadır. Her mekana uyar.",
    image: "https://images.unsplash.com/photo-1620808064879-a720dc4627ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const SLIDES = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
];

const BRANDS = [
  "https://placehold.co/150x50/f1f5f9/334155?text=Marka+1",
  "https://placehold.co/150x50/f1f5f9/334155?text=Marka+2",
  "https://placehold.co/150x50/f1f5f9/334155?text=Marka+3",
  "https://placehold.co/150x50/f1f5f9/334155?text=Marka+4"
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Slider değişimi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* NAVBAR */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <img 
                src={logo}
                alt="Star Perde Logo" 
                className="h-16 w-auto rounded object-contain"
              />
            </div>

            {/* Arama Çubuğu (Masaüstü) */}
            <div className="hidden md:flex flex-1 mx-8">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Perde, kumaş, aksesuar ara..."
                  className="w-full bg-slate-800 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder-slate-400"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Menü Linkleri ve İletişim Butonu (Masaüstü) */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#hakkimizda" className="hover:text-amber-500 transition-colors font-medium">Hakkımızda</a>
              <a 
                href="tel:+905370202981" 
                className="bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold px-5 py-2.5 rounded-full flex items-center transition-all shadow-md shadow-amber-900/20"
              >
                <Phone className="h-4 w-4 mr-2" />
                Bize Ulaşın
              </a>
            </div>

            {/* Mobil Hamburger İkonu */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menü İçeriği */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Ara..."
                  className="w-full bg-slate-700 text-white rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-400" />
              </div>
              <a href="#hakkimizda" className="block text-base font-medium hover:text-amber-500">Hakkımızda</a>
              <a 
                href="tel:+905555555555" 
                className="w-full bg-amber-600 text-slate-900 font-bold px-5 py-3 rounded-lg flex items-center justify-center transition-all mt-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Bize Ulaşın (0555 555 5555)
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* KATEGORİ ÇUBUĞU */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 space-x-6 scrollbar-hide whitespace-nowrap items-center text-sm font-medium text-slate-600" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>
            {CATEGORIES.map((cat, idx) => (
              <a key={idx} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-600 transition-colors cursor-pointer border-b-2 border-transparent hover:border-amber-600 pb-1">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HERO SLIDER */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden bg-slate-900">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Evinize Yeni Bir Dokunuş</h1>
                <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">Modern tasarımlar, kaliteli kumaşlar ve evinize değer katan perde çözümleri Star Perde'de.</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Kontrolleri */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all">
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all">
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Slider Noktaları */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {SLIDES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-amber-500 w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* PERDE KUMAŞ ÇEŞİTLERİ */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Perde Kumaş Çeşitleri</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Mekanınıza en uygun dokuyu seçin. Her ihtiyaca ve tarza hitap eden geniş kumaş yelpazemizle hizmetinizdeyiz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FABRIC_TYPES.map((fabric, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={fabric.image} 
                  alt={fabric.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">{fabric.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">{fabric.description}</p>
                <button className="mt-4 text-amber-600 font-semibold hover:text-amber-700 flex items-center transition-colors">
                  İncele <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS KONUMU */}
      <section className="w-full bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center">
                <MapPin className="h-8 w-8 text-amber-500 mr-3" /> Mağazamızı Ziyaret Edin
              </h2>
              <p className="mt-2 text-slate-600">Dokuları yakından görmek ve uzman ekibimizle görüşmek için bekliyoruz.</p>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner border-4 border-white">
            {/* Temsili Google Maps Iframe (Gerçek kordinatlarınızla değiştirebilirsiniz) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d192697.79327663232!2d28.871754668471243!3d41.0054958082697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zSXN0YW5idWwsIFTDvHJraXll!5e0!3m2!1str!2sus!4v1714578103023!5m2!1str!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mağaza Konumu"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-[6px] border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Marka & Hakkında */}
            <div>
              <img src={logo} alt="Star Perde Logo" className="h-16 w-auto rounded object-contain mb-6 bg-white/10 p-2" />
              <p className="text-sm leading-relaxed mb-6">
                Yılların tecrübesiyle evlerinize ve ofislerinize şıklık katıyoruz. Kaliteli malzeme, kusursuz işçilik ve müşteri memnuniyeti temel ilkemizdir.
              </p>
            </div>

            {/* İletişim */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 font-serif">İletişim</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Örnek Mahallesi, Perdeciler Caddesi No:123<br />Merkez / İstanbul</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                  <a href="tel:+905555555555" className="hover:text-amber-400 transition-colors">+90 555 555 55 55</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                  <a href="mailto:info@starperde.com" className="hover:text-amber-400 transition-colors">info@starperde.com</a>
                </li>
              </ul>
            </div>

            {/* Kategoriler */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 font-serif">Kategoriler</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <a href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-400 transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 font-serif">Bizi Takip Edin</h4>
              <p className="text-sm mb-4">Yeni modellerden ve kampanyalardan haberdar olmak için sosyal medyada bizi takip edin.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 hover:text-white transition-all text-slate-400">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all text-slate-400">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Anlaşmalı Markalar */}
          <div className="border-t border-slate-800 pt-8 mt-8">
            <h5 className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Anlaşmalı Markalarımız</h5>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {BRANDS.map((logo, idx) => (
                <img key={idx} src={logo} alt={`Marka ${idx + 1}`} className="h-10 md:h-12 object-contain rounded bg-white p-1" />
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-slate-500 mt-12">
            &copy; {new Date().getFullYear()} Star Perde. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>

    </div>
  );
}