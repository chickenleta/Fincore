import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-200/70 rounded-b-2xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img src="/RO V no BG.png" alt="RO V Logo" className="h-9 md:h-11 w-auto object-contain" />
            <span className="font-display font-semibold text-lg md:text-xl tracking-tight text-brand-950">
              RO V Jakarta 2
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#kinerja" className="text-slate-600 hover:text-brand-600 transition-colors">Kinerja</a>
            <a href="#emas" className="text-slate-600 hover:text-brand-600 transition-colors">Tabungan E-Mas</a>
            <a href="#manajemen" className="text-slate-600 hover:text-brand-600 transition-colors">Manajemen</a>
            <div className="flex items-center gap-4 ml-4">
              <button className="bg-brand-950 text-white px-5 py-2 rounded-full hover:bg-brand-900 transition-colors text-sm">
                Hubungi Kami
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-1 hover:bg-slate-100 rounded-lg">
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
          className="md:hidden bg-white rounded-b-2xl border-t border-slate-100 px-6 py-5 space-y-4"
        >
          <a href="#kinerja" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-1.5 border-b border-slate-50">Kinerja</a>
          <a href="#emas" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-1.5 border-b border-slate-50">Tabungan E-Mas</a>
          <a href="#manajemen" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-1.5">Manajemen</a>
          <button className="w-full bg-brand-950 text-white px-6 py-3 rounded-xl font-medium text-sm">
            Hubungi Kami
          </button>
        </motion.div>
      )}
    </nav>
  );
}
