import React, { useState, useEffect } from 'react';
import logo from './star-perde-logo.jpeg';
import TulPerde from './images/tul-perde.jpeg';
import StorPerde from './images/stor-perde.jpeg';
import FonPerde from './images/fon-perde.jpeg';
import zebraPerde from './images/zebra-perde.jpeg';
import AhsapJaluziPerde from './images/ahsap-jaluzi-perde.jpeg';
import PlisePerde from './images/plise-perde.jpeg';
import DikeyTulPerde from './images/dikey-tul-perde.jpeg';
import BalkonPerde from './images/balkon-perde.jpeg';
import BracolPerde from './images/bracol-perde.jpeg';

import Hakkimizda from './hakkımızda.jsx';
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

const CATEGORY_DETAILS = {
  "Tül Perde": ["Düz Tül Perde", "Çizgili Tül Perde", "Desenli Tül Perde", "Örme Dantel Tül Perde","Çocuk Odası Tül Perde","Kruvaze Tül Perde"],
  "Stor Perde": ["Blackout Stor Perde", "Screen Stor Perde", "Mat Stor Perde", "Tül Stor Perde","Akustik Stor Perde","Lazer kesim Stor Perde","Simli Stor Perde","Siluet Stor Perde","Baskılı Stor Perde"],
  "Zebra Perde": ["Düz Zebra Perde", "Bambu Zebra Perde", "Plise Zebra Perde", "Baskılı Zebra Perde","Desenli Zebra Perde","Simli Zebra Perde"],
  "Fon Perde": ["Tül Fon Perde", "Düz Fon Perde", "Varaklı Japon Fon Perde", "Kadife Fon Perde","Pano Fon Perde","Desenli Fon Perde"],
  "Jaluzi Perde": ["Ahşap Jaluzi", "Alüminyum Jaluzi"],
  "Plise Perde": ["Düz Plise Perde", "Karartma Plise Perde", "Tül Plise Perde", "Desenli Plise Perde"],
  "Dikey Tül Perde": ["Çizgili Dikey Tül", "Desenli Dikey Tül", "Renkli Dikey Tül"],
  "Balkon Perdesi": ["Cam Balkon Perdesi", "Çizgili Balkon Perdesi", "Güneşlik"],
  "Perde Aksesuarları": ["Fon Perde Rensoları", "Rustik Boru", "Fon Perde Braçolları", "Perde Sarkıtları"],
  "Ev Tekstil": ["Nevresim & Nevresim Takımı", "Pike & Pike Takımı", "Battaniye", "Yatak Örtüsü","Yorgan","Yastık","Uyku Seti","Alez","Çarşaf","El & Yüz Havlusu","Banyo Havlusu","Plaj Havlusu","Bornoz & Bornoz Takımı","Çocuk Bornozu","Paspas & Klozet Takımı"]

};

const FABRIC_TYPES = [
  {
    title: "Tül Perde",
    description: "Yaşam alanlarınıza gün ışığını yumuşatarak alan, şeffaf ve hafif dokusuyla evlere ferahlık ve zamansız bir şıklık katan klasik perde modeli.",
    image: TulPerde
  },
  {
    title: "Stor Perde",
    description: "Mekanizmalı yapısı sayesinde kolay kullanım sunan, leke tutmaz kumaş seçenekleriyle özellikle mutfak ve ofislerde minimalist bir görünüm sağlayan dikey açılır perde.",
    image: StorPerde
  },
  {
    title: "Zebra Perde",
    description: "Saydam ve gazlı bez şeritlerin ardışık dizilimi sayesinde, tek bir hareketle hem tül hem de güneşlik işlevi gören, işlevsel ve modern mekanizmalı perde.",
    image: zebraPerde
  },
  {
    title: "Fon Perde",
    description: "Pencere kenarlarında dekoratif bir çerçeve oluşturan; zengin kumaş, renk ve doku seçenekleriyle mobilyalarınızı ve tül perdenizi tamamlayan estetik unsur.",
    image: FonPerde
  },
  {
    title: "Jaluzi Perde",
    description: "Ahşap veya alüminyum bantların açısını ayarlayarak ortama giren ışık miktarını ve gizliliği dilediğiniz gibi yönlendirmenizi sağlayan karizmatik tasarım.",
    image: AhsapJaluziPerde
  },
  {
    title: "Plise Perde",
    description: "Katlanabilir ipli veya mekanizmalı yapısıyla cam balkon, çatı katı ve dar pencereler için ideal; aşağıdan yukarıya veya yukarıdan aşağıya açılabilen fonksiyonel çözüm.",
    image: PlisePerde
  },
  {
    title: "Dikey TülPerde",
    description: "Tül yumuşaklığı ile dikey perdenin ışık yönlendirme avantajını birleştiren; geniş pencereler ve salonlar için oldukça modern ve görkemli bir seçenek.",
    image: DikeyTulPerde
  },
  {
    title: "Balkon Perdesi",
    description: "Cam balkonlar ve açık alanlar için özel olarak tasarlanan; güneşe, rüzgara ve dış etkenlere karşı koruma sağlarken konforlu bir yaşam alanı oluşturan dayanıklı sistemler.",
    image: BalkonPerde
  },
  {
    title: "Perde Aksesuarları",
    description: "Perde bağı, braçol, renso, fon demiri ve saçak gibi detaylarla perdelerinizin duruşunu zenginleştiren, dekorasyonunuzu tamamlayan estetik dokunuşlar.",
    image: BracolPerde
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
  const [openCategory, setOpenCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (window.location.pathname.replace(/\/$/, '') === '/hakkimizda') {
    return <Hakkimizda />;
  }

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
              <a href="/hakkimizda" className="hover:text-amber-500 transition-colors font-medium">Hakkımızda</a>
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
              <a href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium hover:text-amber-500">Hakkımızda</a>
              <a 
                href="tel:+905370202981" 
                className="w-full bg-amber-600 text-slate-900 font-bold px-5 py-3 rounded-lg flex items-center justify-center transition-all mt-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Bize Ulaşın (0537 020 2981)
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* KATEGORİ ÇUBUĞU */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-6 gap-y-1 py-3 items-center text-sm font-medium text-slate-600">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="relative group" onMouseEnter={() => setOpenCategory(cat)} onMouseLeave={() => setOpenCategory(null)}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openCategory === cat}
                  onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                  onFocus={() => setOpenCategory(cat)}
                  className="hover:text-amber-600 transition-colors cursor-pointer border-b-2 border-transparent hover:border-amber-600 pb-1"
                >
                  {cat}
                </button>
                <div className={`${openCategory === cat ? 'block' : 'hidden'} group-hover:block absolute left-0 top-full z-50 min-w-52 rounded-lg border border-slate-200 bg-white py-2 shadow-xl`}>
                  {CATEGORY_DETAILS[cat].map((detail) => (
                    <a
                      key={detail}
                      href="#perde-kumas-cesitleri"
                      onClick={() => setOpenCategory(null)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {detail}
                    </a>
                  ))}
                </div>
              </div>
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
      <section id="perde-kumas-cesitleri" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Perde Çeşitleri</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Tarzınıza ve mekanınıza en uygun modeli keşfedin. Her ihtiyacı karşılayan geniş ve çeşitli ürün yelpazemizle hizmetinizdeyiz.</p>
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

     
{/* GOOGLE MAPS - STAR PERDE */}
<section className="w-full bg-slate-100 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center">
        <MapPin className="h-8 w-8 text-amber-500 mr-3" />
        Mağazamızı Ziyaret Edin
      </h2>

      <p className="mt-2 text-slate-600">
        STAR PERDE mağazamıza bekliyoruz.
        Bizi ziyaret ederek perde modellerimizi yakından inceleyebilirsiniz.
      </p>
    </div>

    

    <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner border-4 border-white">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6430.97548094236!2d30.144034375279404!3d36.30047749571044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c18a8862bad173%3A0xe224b9620eed5a7!2sSTAR%20PERDE!5e0!3m2!1str!2str!4v1790857897631!5m2!1str!2str"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="STAR PERDE Mağaza Konumu"
  />

  {/* Sağ üst Yol Tarifi butonu */}
  <a
    href="https://maps.app.goo.gl/4eDtaJVJjT2ZtiW87"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-4 right-4 z-10 inline-flex items-center rounded-lg bg-amber-500 px-4 py-2.5 font-semibold text-white shadow-lg transition hover:bg-amber-600"
  >
    <MapPin className="h-5 w-5 mr-2" />
    Yol Tarifi Al
  </a>

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
                  <span>Yeni Mahalle, 504.Sokak No:9<br />Finike / Antalya</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                  <a href="tel:+905370202981" className="hover:text-amber-400 transition-colors">+90 537 020 2981</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                  <a href="mailto:mehmet.lok@hotmail.com" className="hover:text-amber-400 transition-colors">mehmet.lok@hotmail.com</a>
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
                <a href="https://www.instagram.com/star_perde_mehmet_lok?stkn=MXFrMW0zcGI1MnJoeQ%3D%3D" className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 hover:text-white transition-all text-slate-400">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://wa.me/905370202981" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all text-slate-400">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
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
