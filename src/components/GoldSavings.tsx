import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Zap, Coins, Calculator, Award } from 'lucide-react';

export default function GoldSavings() {
  const [goldWeight, setGoldWeight] = useState<number>(10);
  const [years, setYears] = useState<number>(3);
  
  // Real-time styled mock data for Gold Savings
  const goldPriceBuy = 1345000; // Harga beli per gram
  const goldPriceSell = 1235000; // Harga jual kembali per gram
  const averageInflatonProtection = 0.082; // Rata-rata kenaikan emas tahunan ~8.2%

  const calculateFutureValue = () => {
    const principal = goldWeight * goldPriceBuy;
    const futureValue = principal * Math.pow(1 + averageInflatonProtection, years);
    return Math.round(futureValue);
  };

  const formattedValue = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="emas" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section with Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-semibold text-xs mb-4 tracking-wider uppercase">
            <Coins className="w-4 h-4" /> BSI Gold Bullion Bank
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Fasilitas Tabungan E-Mas Syariah
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sebagai pionir pertamanya di Indonesia, <strong>BSI Regional Office V Jakarta 2</strong> menghadirkan integrasi <strong>Bullion Bank</strong> terlengkap. Simpan, investasikan, dan tingkatkan nilai aset berharga Anda berdasarkan prinsip syariah yang kuat, aman, dan likuid.
          </p>
          <div className="mt-4 inline-block bg-teal-900/5 text-teal-800 font-display font-medium px-4 py-2 rounded-xl text-sm border border-teal-500/15">
            Mewujudkan Target Keuangan: <span className="font-bold text-teal-600">"Tumbuh Signifikan, Sustain, & Berkualitas"</span>
          </div>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Benefits Container */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-brand-600" />
                Mengapa Memilih Tabungan E-Mas BSI?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kami melayani wilayah strategis Jakarta Selatan, Bogor, dan Depok dengan ekosistem transaksi emas digital terpercaya yang dapat dicairkan atau ditarik menjadi emas fisik batangan 24 karat di jaringan kantor cabang kami.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Keamanan Fisik Beragun</h4>
                <p className="text-sm text-slate-500">Seluruh saldo digital emas dicadangkan 100% oleh emas fisik bersertifikasi resmi.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Proteksi Terbaik Inflasi</h4>
                <p className="text-sm text-slate-500">Nilai aset emas stabil dan cenderung meningkat pesat dari tahun ke tahun.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Sangat Likuid & Fleksibel</h4>
                <p className="text-sm text-slate-500">Beli, jual kembali, atau jadikan jaminan pembiayaan langsung via BSI Mobile.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Bebas Pajak & Biaya Ribet</h4>
                <p className="text-sm text-slate-500">Skema bagi hasil dan margin transparan tanpa biaya titip tersembunyi.</p>
              </div>
            </div>

            {/* Display Real-time Simulated Table Prices */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-brand-600/10 to-transparent pointer-events-none" />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400">Harga Emas Hari Ini</span>
                  <p className="text-lg font-bold">Simulasi Bullion Bank Indonesia</p>
                </div>
                <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">Region RO V Jakarta 2</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-slate-400">Harga Beli Tabungan</p>
                  <p className="text-lg sm:text-2xl font-bold text-teal-300">{formattedValue(goldPriceBuy)} <span className="text-[10px] sm:text-xs text-slate-400">/gr</span></p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-400">Harga Jual (Buyback)</p>
                  <p className="text-lg sm:text-2xl font-bold text-orange-400">{formattedValue(goldPriceSell)} <span className="text-[10px] sm:text-xs text-slate-400">/gr</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <div className="lg:col-span-5 bg-teal-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-6 text-teal-300">
                <Calculator className="w-5 h-5" />
                <span className="font-mono text-sm tracking-widest uppercase">Kalkulator Emas BSI</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Simulasikan Kemandirian Finansial Anda</h3>
              <p className="text-teal-100 text-sm leading-relaxed mb-8">
                Hitung proyeksi pertumbuhan aset tabungan emas syariah Anda di wilayah kerja Regional Office V Jakarta 2.
              </p>

              {/* Sliders for Golden Interactive Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-teal-200">Rencana Pembelian Emas</span>
                    <span className="font-bold text-white">{goldWeight} Gram</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="500" 
                    value={goldWeight} 
                    onChange={(e) => setGoldWeight(Number(e.target.value))}
                    className="w-full accent-orange-400 cursor-pointer h-2 bg-teal-950 rounded-lg outline-none"
                  />
                  <div className="flex justify-between text-[11px] text-teal-300 font-mono mt-1">
                    <span>1 gr</span>
                    <span>100 gr</span>
                    <span>250 gr</span>
                    <span>500 gr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-teal-200">Durasi Investasi (Tahun)</span>
                    <span className="font-bold text-white">{years} Tahun</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    value={years} 
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-orange-400 cursor-pointer h-2 bg-teal-950 rounded-lg outline-none"
                  />
                  <div className="flex justify-between text-[11px] text-teal-300 font-mono mt-1">
                    <span>1 Tahun</span>
                    <span>5 Tahun</span>
                    <span>10 Tahun</span>
                    <span>15 Tahun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Output Block */}
            <div className="mt-8 pt-8 border-t border-teal-850 relative">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-teal-200">Modal Awal Pembelian:</span>
                  <span className="font-mono">{formattedValue(goldWeight * goldPriceBuy)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-teal-200">Asumsi Kenaikan Tahunan:</span>
                  <span className="font-mono text-teal-300">+8.2%</span>
                </div>
                <div className="bg-teal-950 p-4 rounded-2xl flex flex-col items-center justify-center text-center mt-3 border border-teal-800">
                  <span className="text-xs text-teal-300 uppercase tracking-widest mb-1 font-mono">Estimasi Nilai Masa Depan</span>
                  <span className="text-3xl font-bold text-orange-300 font-display">
                    {formattedValue(calculateFutureValue())}
                  </span>
                  <span className="text-[11px] text-teal-400 mt-2">
                    Proyeksi amanah maslahah berkelanjutan
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
