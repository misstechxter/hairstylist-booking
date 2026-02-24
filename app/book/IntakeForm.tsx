"use client";
import { useState } from 'react';
import { X, ChevronLeft } from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export default function IntakeForm({ bookingData, onBack, onConfirm }: any) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  return (
    <section className="animate-in fade-in slide-in-from-right text-left text-white pb-32">
       <button onClick={onBack} className="mb-6 flex items-center gap-1 text-[10px] font-bold opacity-60 uppercase tracking-widest"><ChevronLeft size={14}/> Back</button>

       <div className="bg-[#7a5c52] p-5 rounded relative mb-10">
          <X className="absolute top-4 right-4 opacity-30 cursor-pointer" onClick={onBack} size={18} />
          <h2 className="font-bold text-lg leading-tight w-4/5">Fulani front, sew in back...</h2>
          <p className="text-[11px] font-bold mt-1 text-white/90">Wednesday, February 25th, 2026 at 8:00 AM CST</p>
          <button className="text-[10px] font-bold mt-4 underline opacity-60">SHOW ALL</button>
       </div>

      <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-40 border-b border-white/10 pb-2">Your Information</h2>
      
      <form onSubmit={(e) => { e.preventDefault(); onConfirm(formData); }} className="space-y-10">
        <div className="space-y-1">
            <label className="text-[10px] font-black opacity-60 uppercase tracking-tighter">First Name</label>
            <input required type="text" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-all font-bold" 
              onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-black opacity-60 uppercase tracking-tighter">Last Name</label>
            <input required type="text" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-all font-bold" 
              onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-black opacity-60 uppercase tracking-tighter">Phone</label>
            <div className="flex items-center gap-2 border-b-2 border-white/20">
               <span className="text-sm">🇺🇸 +1</span>
               <input required type="tel" className="w-full bg-transparent outline-none py-2 font-bold" 
                 onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-black opacity-60 uppercase tracking-tighter">Email</label>
            <input required type="email" placeholder="Add..." className="w-full bg-transparent border-b-2 border-white/20 focus:border-white outline-none py-2 transition-all font-bold placeholder:opacity-20" 
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>

        {/* T&C Section from Video 0:13 */}
        <div className="mt-16 bg-black/5 p-6 rounded-lg">
            <h3 className="font-black text-xl mb-6 italic tracking-tighter">Terms & Conditions</h3>
            <div className="text-[11px] leading-relaxed space-y-4 opacity-80 font-bold uppercase tracking-tight">
                <p>1. I have read and understand all descriptions and instructions.</p>
                <p>2. I am aware that my deposit is non-refundable and is required of me in order to secure my appointment ONLY.</p>
                <p>3. I will adhere to the no call/ no show policy, late fee policy, and rescheduling policy and any other policies there-within.</p>
                <p>4. I am aware of the extra fees I'm required to pay depending on what I choose.</p>
                <p>5. I understand and accept that failure to adhere to all policies... result in a forfeited deposit, cancelled appointment, additional fees and/or delayed order(s).</p>
            </div>
            
            <label className="flex items-center gap-4 mt-10 p-4 border border-white/10 rounded cursor-pointer group active:bg-white/5 transition-colors">
                <input type="checkbox" required className="h-5 w-5 accent-white rounded border-none" />
                <span className="text-[10px] font-black uppercase tracking-tighter">I have read and agree to the terms above</span>
            </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-white text-[#a38076] py-5 font-black text-xs tracking-[0.3em] uppercase mt-10 rounded shadow-2xl active:scale-95 transition-all"
        >
          Pay Deposit
        </button>
      </form>
    </section>
  );
}