"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import { Check, X, Lock, RefreshCcw, Smartphone, Instagram, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = "TJ_CHAIR_2026"; // Change this whenever you need

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      alert("Access Denied: Incorrect Stylist Pin");
    }
  };

  async function fetchBookings() {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setBookings(data);
    setLoading(false);
  }

  async function updateStatus(id: string, newStatus: string) {
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', id);
    if (!error) fetchBookings();
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-[#2d221e] cheetah-texture">
        <div className="bg-white p-8 rounded-[30px] shadow-2xl w-full max-w-sm text-center border-4 border-black/10">
          <div className="bg-[#a38076] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="text-white" />
          </div>
          <h1 className="font-black text-2xl uppercase italic tracking-tighter text-zinc-900">Stylist Portal</h1>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1 mb-6">Authorized Personnel Only</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="ENTER PIN" 
              className="w-full p-4 bg-zinc-100 rounded-xl border-2 border-transparent focus:border-[#a38076] outline-none text-center font-black tracking-widest text-zinc-800"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="cheetah-texture w-full py-4 rounded-xl font-black text-xs tracking-[0.3em] uppercase shadow-lg text-white">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <header className="flex justify-between items-center mb-8 py-6 border-b border-zinc-200">
          <div>
            <h1 className="font-black text-3xl uppercase italic tracking-tighter text-zinc-900 leading-none">Bookings</h1>
            <p className="text-[10px] font-bold text-[#a38076] uppercase tracking-widest mt-1">Tresseallure Admin</p>
          </div>
          <button onClick={fetchBookings} className={`p-3 bg-white rounded-full shadow-sm hover:rotate-180 transition-all duration-500 ${loading ? 'animate-spin' : ''}`}>
            <RefreshCcw size={20} className="text-zinc-400" />
          </button>
        </header>

        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm relative overflow-hidden">
              {b.status === 'awaiting_verification' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-400" />
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-black text-lg uppercase italic text-zinc-900">{b.first_name} {b.last_name}</h3>
                  <p className="text-[#a38076] font-bold text-[11px] uppercase tracking-tighter">{b.service_name}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${b.status === 'awaiting_verification' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                  {b.status === 'awaiting_verification' ? 'Pending Zelle' : 'Confirmed'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-bold bg-zinc-50 p-2 rounded-lg">
                  <Clock size={14} /> {b.appointment_date} @ {b.appointment_time}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-bold bg-zinc-50 p-2 rounded-lg">
                  <Instagram size={14} /> @{b.instagram || 'none'}
                </div>
              </div>

              {b.status === 'awaiting_verification' && (
                <div className="flex gap-2">
                  <button 
                    onClick={() => updateStatus(b.id, 'confirmed')}
                    className="flex-1 bg-green-600 text-white py-3 rounded-xl font-black text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                  >
                    <Check size={14}/> CONFIRM DEPOSIT
                  </button>
                  <button 
                    onClick={() => updateStatus(b.id, 'cancelled')}
                    className="p-3 bg-zinc-100 text-zinc-400 rounded-xl hover:bg-red-50 hover:text-red-400 transition-colors"
                  >
                    <X size={18}/>
                  </button>
                </div>
              )}
            </div>
          ))}
          {bookings.length === 0 && <p className="text-center text-zinc-400 italic py-20">No appointments yet...</p>}
        </div>
      </div>
    </main>
  );
}