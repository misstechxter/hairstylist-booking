"use client";
import { Copy, CheckCircle2, Smartphone, DollarSign } from 'lucide-react';

interface PaymentProps {
  onComplete: () => void;
  bookingTotal: string;
}

export default function PaymentInstructions({ onComplete, bookingTotal }: PaymentProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can replace this alert with a custom toast notification later
    alert("Copied: " + text);
  };

  return (
    <section className="animate-in zoom-in-95 duration-300 text-white">
      <div className="bg-[#7a5c52] border-2 border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-4 rounded-full">
            <DollarSign className="text-white w-8 h-8" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-center uppercase italic tracking-tighter mb-2">
          Secure Your Spot
        </h2>
        <p className="text-center text-sm opacity-80 mb-8 font-medium">
          A non-refundable <span className="font-black text-white">$20.00 deposit</span> is required to confirm your {bookingTotal} appointment.
        </p>

        <div className="space-y-4">
          {/* Zelle Option */}
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Zelle</span>
              <button 
                onClick={() => copyToClipboard("3126630013")}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
            <p className="text-xl font-black tracking-widest">312-663-0013</p>
          </div>

          {/* Apple Pay Option */}
          <div className="p-5 bg-black/40 rounded-2xl border border-white/10 hover:bg-black/60 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Apple Pay</span>
              <button 
                onClick={() => copyToClipboard("3126630013")}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2">
               <Smartphone size={18} />
               <p className="text-xl font-black tracking-widest">312-663-0013</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-black/20 rounded-xl border-l-4 border-white/30">
          <p className="text-[10px] font-bold uppercase leading-relaxed opacity-70 italic">
            Note: Please include your name and "Deposit" in the payment description.
          </p>
        </div>

        <button 
          onClick={onComplete}
          className="w-full mt-10 py-5 bg-white text-[#a38076] font-black text-xs tracking-[0.3em] uppercase rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
        >
          Confirm I've Sent Payment
        </button>
      </div>
    </section>
  );
}