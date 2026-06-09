import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);
      
      // Draw smooth smoky waves
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let x = 0; x <= width; x += 20) {
          const y = Math.sin(x * 0.002 + time + i) * 80 + height - 120 - (i * 40);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        
        const gradient = ctx.createLinearGradient(0, height - 300, 0, height);
        gradient.addColorStop(0, `rgba(20, 184, 166, ${0.05 + i * 0.02})`); // Teal 500
        gradient.addColorStop(1, `rgba(249, 115, 22, ${0.05 + i * 0.02})`); // Orange 500
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 mix-blend-multiply"
    />
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [0, 1], ["-2%", "2%"]);
  const bgY = useTransform(smoothY, [0, 1], ["-2%", "2%"]);

  const contentRotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const contentRotateY = useTransform(smoothX, [0, 1], [-3, 3]);
  const contentX = useTransform(smoothX, [0, 1], ["-1%", "1%"]);
  const contentY = useTransform(smoothY, [0, 1], ["-1%", "1%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Background image & parallax overlay */}
      <motion.div 
        className="absolute inset-0 -m-8"
        style={{ x: bgX, y: bgY }}
      >
        <img 
          src="/image/JKT2.png" 
          alt="Office Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </motion.div>

      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-3xl"
          style={{ 
            rotateX: contentRotateX, 
            rotateY: contentRotateY, 
            x: contentX, 
            y: contentY,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-medium text-sm mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Selamat Datang di Gerbang RO
            </div>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Assalamu'alaikum <br className="hidden lg:block"/> Insan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-400">RO V Jakarta 2</span> 👋
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed italic font-semibold border-l-4 border-brand-500 pl-4 py-1">
              "Tumbuh Signifikan, Sustain & Berkualitas"
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-brand-950 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-900 transition-all flex items-center gap-2 group">
                Masuk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
