import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const team = [
  {
    name: 'Budi Santoso',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Mantan direktur JP Morgan Asia dengan pengalaman 20 tahun di industri keuangan global.'
  },
  {
    name: 'Diana Wijaya',
    role: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Ahli strategi finansial dengan rekam jejak dalam optimasi aset triliunan rupiah.'
  },
  {
    name: 'Kevin Pratama',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Pionir dalam implementasi AI dan blockchain untuk transaksi frekuensi tinggi (HFT).'
  },
  {
    name: 'Sarah Rahman',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Memastikan efisiensi operasional dan standar kepatuhan regulasi internasional.'
  },
  {
    name: 'Andi Kusuma',
    role: 'Head of Investment',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Pakar analisis portofolio dengan spesialisasi efek pendapatan tetap.'
  },
  {
    name: 'Rina Melati',
    role: 'Head of Compliance',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    bio: 'Menjaga standar kepatuhan tertinggi sesuai regulasi OJK.'
  },
  {
    name: 'Hendra Setiawan',
    role: 'Director of Wealth Management',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Membantu klien High Net Worth Individual dalam merancang legasi finansial.'
  },
  {
    name: 'Maya Purnama',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    bio: 'Memimpin riset ekonomi makro dan analisis pasar modal.'
  },
  {
    name: 'David Salim',
    role: 'Head of Corporate Finance',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80',
    bio: 'Spesialis dalam restrukturisasi keuangan dan merger & akuisisi multinasional.'
  },
  {
    name: 'Anita Chandra',
    role: 'Head of Risk Management',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
    bio: 'Berpengalaman 15 tahun dalam memitigasi risiko investasi institusional.'
  },
  {
    name: 'Reza Pahlevi',
    role: 'Head of Digital Strategy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Penggerak utama di balik platform manajemen investasi digital FinCore.'
  },
  {
    name: 'Lisa Hermawan',
    role: 'Head of Client Relations',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    bio: 'Berdedikasi untuk memberikan layanan kelas satu bagi pelanggan setia kami.'
  }
];

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="manajemen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
            Kepemimpinan yang Tangguh
          </h2>
          <p className="text-lg text-slate-600">
            Tim manajemen kami mengkombinasikan pengalaman puluhan tahun dari lembaga keuangan terkemuka dengan inovasi teknologi.
          </p>
        </div>

        <div className="relative group/carousel">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 lg:-left-6 top-[35%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-xl opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:opacity-100 -translate-x-1/2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 lg:-right-6 top-[35%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-xl opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:opacity-100 translate-x-1/2"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <style dangerouslySetInnerHTML={{__html: `
            .team-carousel::-webkit-scrollbar {
              display: none;
            }
          `}} />
          <div 
            ref={scrollContainerRef}
            className="team-carousel flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group w-[260px] sm:w-[300px] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex-none snap-start"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
