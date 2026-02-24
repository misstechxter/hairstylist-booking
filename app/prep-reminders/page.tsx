"use client";
import Link from 'next/link';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function PrepPage() {
  const prepSteps = [
    "Arrive with washed and blow-dried hair",
    "Ensure your hair is dry before your appointment",
    "Remove all hair accessories",
    "Be prepared to share your hair history",
    "Bring photos to share your vision",
    "Inform us if you have allergies or feel sick"
  ];

  const restrictions = [
    "No extra guests (unless getting hair done or parent with child)",
    "Avoid hot tools before the appointment",
    "Arrive on time"
  ];

  return (
    <main className="flex flex-col items-center h-full p-8 overflow-y-auto">
      <div className="flex items-center gap-2 mt-4 mb-6">
        <h1 className="font-[family-name:--font-brand] text-red-600 text-3xl">
          PREP & REMINDERS
        </h1>
      </div>

      <div className="w-full space-y-4">
        {/* Checklist Section */}
        <div className="bg-white/60 rounded-2xl p-5 border-l-4 border-pink-400 shadow-sm">
          <h2 className="text-pink-500 font-bold text-sm mb-3 uppercase tracking-widest">The Checklist</h2>
          <ul className="space-y-3">
            {prepSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-left">
                <CheckCircle2 className="text-pink-400 shrink-0 w-5 h-5" />
                <span className="text-gray-800 text-sm font-medium leading-tight">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Notes Section */}
        <div className="bg-pink-50 rounded-2xl p-5 border-l-4 border-red-500 shadow-sm">
          <h2 className="text-red-600 font-bold text-sm mb-3 uppercase tracking-widest">Important Notes</h2>
          <ul className="space-y-3">
            {restrictions.map((note, i) => (
              <li key={i} className="flex items-start gap-3 text-left">
                <AlertCircle className="text-red-500 shrink-0 w-5 h-5" />
                <span className="text-gray-800 text-sm font-semibold leading-tight">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link 
        href="/" 
        className="mt-8 mb-4 text-red-600 font-bold border-b-2 border-red-600 hover:text-pink-500 hover:border-pink-500 transition-colors"
      >
        ← BACK
      </Link>
    </main>
  );
}