"use client";
import { ChevronLeft, Lock } from 'lucide-react';
import Link from 'next/link';

export default function IntakePage() {
  return (
    <div className="booking-paper">
      {/* Mini Cheetah Header */}
      <div className="cheetah-texture p-6 flex justify-between items-center border-b-2 border-[#2d221e]">
        <Link href="/book" className="text-white hover:opacity-50"><ChevronLeft /></Link>
        <span className="font-black uppercase tracking-widest text-xs italic">Client Details</span>
        <div className="w-6" />
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
            <input type="text" placeholder="First & Last Name" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-sm focus:border-[#a38076] outline-none transition-all" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
              <input type="tel" placeholder="(713) 000-0000" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-sm focus:border-[#a38076] outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Instagram</label>
              <input type="text" placeholder="@handle" className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-sm focus:border-[#a38076] outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Notes / Add-ons</label>
            <textarea placeholder="Extra length, specific color, etc..." className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-lg text-sm focus:border-[#a38076] outline-none h-24 resize-none" />
          </div>
        </div>

        {/* The Final Button (Cheetah Texture) */}
        <button className="cheetah-texture w-full py-5 rounded-xl font-black text-sm tracking-[0.3em] uppercase shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
          <Lock size={16} /> Pay Deposit & Book
        </button>

        <p className="text-[9px] text-center text-zinc-400 font-bold leading-relaxed px-4">
          BY CLICKING ABOVE, YOU AGREE TO OUR <Link href="/policies" className="underline text-[#a38076]">BOOKING POLICIES</Link>. DEPOSITS ARE NON-REFUNDABLE.
        </p>
      </div>
    </div>
  );
}