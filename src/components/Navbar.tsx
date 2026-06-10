import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 shrink-0">
            <img src="/RO V no BG.png" alt="RO V Logo" className="h-9 w-auto object-contain shrink-0" />
            <span className="font-display font-semibold text-base md:text-lg tracking-tight text-slate-900 shrink-0">
              RO V Jakarta 2
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#kinerja" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Kinerja</a>
            <a href="#emas" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Tabungan E-Mas</a>
            <a href="#manajemen" className="text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">Manajemen</a>
            
            <div className="w-px h-4 bg-slate-900/10 mx-1"></div>
            
            <button className="bg-brand-950 text-white font-semibold text-xs px-4 py-2 rounded-full hover:bg-teal-750 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              Hubungi Kami
            </button>
          </div>

          <div className="md:hidden flex items-center shrink-0">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-1.5 hover:bg-slate-100 rounded-lg shrink-0 transition-colors focus:outline-none">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3.5 shadow-lg"
        >
          <a href="#kinerja" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-700 py-1 border-b border-slate-100 pb-2">Kinerja</a>
          <a href="#emas" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-700 py-1 border-b border-slate-100 pb-2">Tabungan E-Mas</a>
          <a href="#manajemen" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-700 py-1 pb-1">Manajemen</a>
          <button className="w-full bg-brand-950 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors focus:ring-2 focus:ring-teal-500 shadow-sm">
            Hubungi Kami
          </button>
        </motion.div>
      )}
    </nav>
  );
}
