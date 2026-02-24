"use client";
import Link from 'next/link';

export default function ContactPage() {
  const contactInfo = [
    { label: "HOURS", value: "MON-THURS 8:00 AM - 6:00 PM\nSAT- 9:00 AM-9:00PM\n-SUN CLOSED", icon: "📅" },
    { label: "EMAIL", value: "MAIL@GMAIL.COM", icon: "✉️" },
    { label: "MOBILE", value: "(312)-663-0013", icon: "📞" },
    { label: "LOCATION", value: "77099\n77014", icon: "📍" }
  ];

  return (
    <main className="flex flex-col items-center h-full p-8 text-center overflow-y-auto">
      <h1 className="font-[family-name:--font-brand] text-red-600 text-4xl mt-4 mb-8">
        CONTACT
      </h1>

      <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
        {contactInfo.map((info) => (
          <div key={info.label} className="relative group">
            {/* The Pink Capsule Border */}
            <div className="border-2 border-pink-400 rounded-full bg-white/80 p-4 flex items-center shadow-sm">
              <div className="bg-white border border-gray-200 rounded-full p-2 mr-4 text-xl shrink-0">
                {info.icon}
              </div>
              
              <div className="flex flex-col items-start text-left">
                {/* The Pink Label Badge */}
                <span className="bg-pink-400 text-white text-[10px] font-bold px-3 py-0.5 rounded-full absolute -top-2 left-12">
                  {info.label}
                </span>
                <p className="text-gray-800 text-sm font-semibold whitespace-pre-line leading-tight">
                  {info.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-8 italic px-4">
        Kindly take a moment to read through all policies and guidelines before scheduling.
      </p>

      <Link 
        href="/" 
        className="mt-6 text-red-600 font-bold border-b-2 border-red-600 hover:text-pink-500 hover:border-pink-500 transition-colors"
      >
        ← BACK
      </Link>
    </main>
  );
}