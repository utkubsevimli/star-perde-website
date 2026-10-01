import React from 'react';
import { ArrowLeft, Check, MapPin, Phone } from 'lucide-react';
import logo from './star-perde-logo.jpeg';

const values = [
  'İhtiyacınıza ve yaşam alanınıza uygun çözümler',
  'Özenle seçilmiş kaliteli kumaş ve malzemeler',
  'Ölçüden montaja kadar dikkatli işçilik',
];

export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-10 bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Star Perde ana sayfa">
            <img src={logo} alt="Star Perde" className="h-16 w-auto rounded object-contain" />
          </a>
          <a href="/" className="inline-flex items-center gap-2 font-medium transition hover:text-amber-400">
            <ArrowLeft className="h-4 w-4" /> Ana Sayfa
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-900 px-4 py-20 text-center text-white sm:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-amber-400">Star Perde</p>
          <h1 className="text-4xl font-bold sm:text-6xl">Hakkımızda</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Evinize yakışan perdeyi, özenli hizmet ve yılların deneyimiyle buluşturuyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-amber-600">Biz kimiz?</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Yaşam alanlarınıza değer katıyoruz</h2>
          <p className="mt-6 leading-8 text-slate-600">
            STAR PERDE olarak ev ve iş yerleriniz için perde ve ev tekstili çözümleri sunuyoruz.
            Her mekânın ve her müşterinin ihtiyacının farklı olduğunu biliyor; doğru modeli,
            kumaşı ve ölçüyü birlikte belirliyoruz.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            İlk seçimden son dokunuşa kadar önceliğimiz, uzun süre keyifle kullanacağınız
            şık ve işlevsel bir sonuç elde etmek. Mağazamızda ürünleri yakından inceleyebilir,
            size en uygun seçenekler için ekibimizden destek alabilirsiniz.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Perdelerle tamamlanmış aydınlık bir yaşam alanı"
            className="h-[320px] w-full object-cover sm:h-[440px]"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 font-semibold uppercase tracking-widest text-amber-600">Star Perde farkı</p>
            <h2 className="text-3xl font-bold text-slate-900">Her aşamada özen</h2>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-6 leading-7 text-slate-700">
                <span className="mt-0.5 rounded-full bg-amber-100 p-1 text-amber-700"><Check className="h-4 w-4" /></span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-amber-500 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Sizi mağazamızda ağırlayalım</h2>
            <p className="mt-2">Perde seçeneklerimizi yakından görün, birlikte karar verelim.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+905370202981" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              <Phone className="h-4 w-4" /> 0537 020 2981
            </a>
            <a href="https://maps.app.goo.gl/4eDtaJVJjT2ZtiW87" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-900 px-6 py-3 font-semibold transition hover:bg-amber-400">
              <MapPin className="h-4 w-4" /> Yol tarifi al
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 px-4 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Star Perde. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
