import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#a38076] flex flex-col items-center justify-center p-6 text-white text-center">
      <div className="max-w-md w-full">
        {/* Brand Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto border-2 border-white/20 mb-4">
            <Scissors className="text-white w-10 h-10" />
          </div>
          <h1 className="font-[family-name:--font-brand] text-5xl italic uppercase font-black tracking-tighter">
            Tresseallure
          </h1>
          <p className="text-[10px] font-black tracking-[0.4em] opacity-60 uppercase mt-2">
            Luxury Braiding & Installs
          </p>
        </div>

        {/* Action Button */}
        <Link 
          href="/book" 
          className="block w-full bg-white text-[#a38076] py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
        >
          Book Appointment
        </Link>

        {/* Secondary Links */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link href="/policies" className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100">
            Policies
          </Link>
          <Link href="/admin" className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100">
            Stylist Login
          </Link>
        </div>
      </div>
    </main>
  );
}