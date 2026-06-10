import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Activity, Users, Globe2, Percent } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Dana Pihak Ketiga (DPK)',
    value: 'Rp 38.6 Triliun',
    icon: Activity,
    description: 'Amanah simpanan nasabah RO V Jakarta 2'
  },
  {
    id: 2,
    name: 'Nasabah Aktif',
    value: '2.4 Juta+',
    icon: Users,
    description: 'Warga Jakarta Selatan, Bogor & Depok'
  },
  {
    id: 3,
    name: 'Jaringan Cabang',
    value: '82 Kantor',
    icon: Globe2,
    description: 'Outlet layanan tersebar di Jabodetabek'
  },
  {
    id: 4,
    name: 'Penyaluran Ziswaf',
    value: 'Rp 145 Miliar',
    icon: Percent,
    description: 'Kontribusi sosial & zakat wilayah'
  }
];

export default function Performance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kinerja" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2000&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-display font-bold mb-4"
          >
            Tumbuh Bersama Kinerja Nyata
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-100 text-lg"
          >
            Fondasi yang kokoh dan strategi manajemen risiko yang ketat menghasilkan pertumbuhan portofolio yang konsisten di berbagai kondisi pasar.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">{stat.value}</h3>
                <p className="text-brand-200 font-medium mb-1">{stat.name}</p>
                <p className="text-sm text-slate-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
