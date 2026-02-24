import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Home() {
  return (
    <div className="booking-paper flex flex-col">
      {/* Cheetah Header Area */}
      <div className="cheetah-texture h-48 flex flex-col items-center justify-center border-b-4 border-[#2d221e]">
        <div className="bg-white/90 p-4 rounded-full mb-2 shadow-lg">
          <Scissors className="text-[#a38076] w-10 h-10" />
        </div>
        <h1 className="font-black text-4xl italic uppercase tracking-tighter text-white drop-shadow-md">
          Tresseallure
        </h1>
      </div>

      <div className="p-8 flex-1 flex flex-col justify-center gap-6">
        <div className="text-center">
          <p className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase mb-2">Houston, Texas</p>
          <h2 className="text-xl font-bold text-zinc-800 uppercase italic">Welcome to the Gallery</h2>
        </div>

        <Link 
          href="/book" 
          className="cheetah-texture w-full py-6 rounded-lg text-center font-black text-sm tracking-[0.3em] uppercase shadow-xl hover:scale-[1.02] transition-transform active:scale-95"
        >
          Book Appointment
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/policies" className="text-center py-4 bg-zinc-50 border border-zinc-100 rounded font-bold text-[10px] uppercase tracking-widest text-zinc-500">
            Policies
          </Link>
          <Link href="/admin" className="text-center py-4 bg-zinc-50 border border-zinc-100 rounded font-bold text-[10px] uppercase tracking-widest text-zinc-500">
            Stylist
          </Link>
        </div>
      </div>
    </div>
  );
}