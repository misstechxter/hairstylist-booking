"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';
import { Check, X, Phone, Instagram, Clock, Lock, RefreshCcw } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Set your desired password here
  const ADMIN_PASSWORD = "TJ_CHAIR_2026"; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      alert("Invalid Stylist Password");
    }
  };

  async function fetchBookings() {
  setLoading(true);
  // FIX: Added .select('*') before the .order()
  const { data, error } = await supabase
    .from('bookings')
    .select('*') 
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching bookings:", error.message);
  }
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
      <main className="h-screen w-full flex items-center justify-center bg-zinc-900 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-black w-full max-w-sm text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-pink-500" />
          </div>
          <h1 className="font-[family-name:--font-brand] text-red-600 text-3xl mb-2 italic">TEEJAY ONLY</h1>
          <form onSubmit={handleLogin} className="space-y-4 mt-6">
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full p-4 bg-gray-100 rounded-xl border-2 border-transparent focus:border-pink-400 outline-none text-center font-bold text-black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-pink-600 transition-colors">
              UNLOCK DASHBOARD
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4 bg-gray-50 min-h-screen text-black">
      <div className="max-w-2xl mx-auto pb-20">
        <header className="flex justify-between items-center mb-8 border-b-2 border-black pb-4">
          <h1 className="font-[family-name:--font-brand] text-red-600 text-3xl">Portal</h1>
          <button onClick={fetchBookings} className="p-2 hover:rotate-180 transition-transform duration-500">
            <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
          </button>
        </header>
        
        <div className="space-y-4">
          {bookings.length === 0 && <p className="text-center text-gray-400 italic">No bookings found...</p>}
          {bookings.map((b) => (
            <div key={b.id} className={`p-5 rounded-2xl border-2 bg-white shadow-sm transition-all ${b.status === 'awaiting_verification' ? 'border-pink-400 scale-[1.02]' : 'border-gray-100 opacity-80'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-black text-xl text-zinc-900 uppercase italic leading-none">{b.first_name} {b.last_name}</h3>
                  <p className="text-pink-500 font-bold text-sm tracking-tighter mt-1">{b.service_name}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${b.status === 'awaiting_verification' ? 'bg-pink-500 text-white animate-pulse' : 'bg-green-100 text-green-600'}`}>
                  {b.status === 'awaiting_verification' ? 'Verify Zelle' : b.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[12px] font-medium text-gray-500">
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><Clock size={14}/> {b.appointment_date} @ {b.appointment_time}</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><Instagram size={14}/> @{b.instagram || 'none'}</div>
                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"><Phone size={14}/> {b.phone}</div>
              </div>

              {b.status === 'awaiting_verification' && (
                <div className="mt-5 flex gap-2">
                  <button 
                    onClick={() => updateStatus(b.id, 'confirmed')}
                    className="flex-1 bg-green-500 text-white py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                  >
                    <Check size={16}/> CONFIRM PAYMENT
                  </button>
                  <button 
                    onClick={() => updateStatus(b.id, 'cancelled')}
                    className="p-3 bg-gray-100 text-gray-400 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    <X size={18}/>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}