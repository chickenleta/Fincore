import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <image src="/RO V no BG.png" alt="RO V Logo" className="h-10 w-auto object-contain" />
            <span className="font-display font-bold text-xl tracking-tight text-brand-950">
              RO V Jakarta 2
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#kinerja" className="text-slate-600 hover:text-brand-600 transition-colors">Kinerja</a>
            <a href="#layanan" className="text-slate-600 hover:text-brand-600 transition-colors">Layanan</a>
            <a href="#manajemen" className="text-slate-600 hover:text-brand-600 transition-colors">Manajemen</a>
            <div className="flex items-center gap-4 ml-4">
              <button className="bg-brand-950 text-white px-6 py-2.5 rounded-full hover:bg-brand-900 transition-colors">
                Daftar
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4"
        >
          <a href="#kinerja" className="block text-slate-600 font-medium py-2">Kinerja</a>
          <a href="#layanan" className="block text-slate-600 font-medium py-2">Layanan</a>
          <a href="#manajemen" className="block text-slate-600 font-medium py-2">Manajemen</a>
          <button className="w-full bg-brand-950 text-white px-6 py-3 rounded-xl font-medium">
            Daftar
          </button>
        </motion.div>
      )}
    </nav>
  );
}
