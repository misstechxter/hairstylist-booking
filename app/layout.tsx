import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full max-w-[450px] h-[850px] bg-[url('/bg-combined.jpg')] bg-cover shadow-2xl overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}