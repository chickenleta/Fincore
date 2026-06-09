export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img src="/public/RO V no BG.png" alt="RO V Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="font-display font-bold text-xl tracking-tight">RO V Jakarta 2</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Membentuk masa depan keuangan melalui inovasi, keandalan, dan transparansi untuk seluruh klien institusional dan individu kami.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Manajemen Kekayaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perencanaan Pensiun</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investasi Korporasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Equity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#manajemen" className="hover:text-white transition-colors">Tim Manajemen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungan Investor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li>Kantor Pusat: Gedung FinCore Tower, Jl. Sudirman Kav. 50, Jakarta 12190</li>
              <li>+62 21 555 0123</li>
              <li>contact@fincore.capital</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 FinCore Capital. Hak asasi dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Keamanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
