export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img src="/RO V no BG.png" alt="RO V Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="font-display font-bold text-xl tracking-tight">RO V Jakarta 2</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Kantor Wilayah (Regional Office) V Jakarta 2 Bank Syariah Indonesia, menghadirkan layanan perbankan syariah berorientasi maslahah untuk masyarakat Jakarta Selatan, Bogor, dan Depok.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan Syariah</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tabungan & Haji Umrah</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mitra Deposito & DPK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pembiayaan Griya & Oto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kemitraan Mikro & UMKM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Wilayah Kerja</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-slate-400">Jakarta Selatan</span></li>
              <li><span className="text-slate-400">Bogor (Kota & Kabupaten)</span></li>
              <li><span className="text-slate-400">Depok</span></li>
              <li><a href="#manajemen" className="hover:text-white transition-colors">Dewan Pengawas Syariah</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li>Kantor Wilayah V: Gedung BSI, Jakarta Selatan, Indonesia</li>
              <li>+62 21 789 0123</li>
              <li>rov.jakarta2@bankbsi.co.id</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Bank Syariah Indonesia - Regional Office V Jakarta 2. Hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Keamanan Transfer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
