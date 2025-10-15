"use client";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {/* Theme init script: read localStorage or prefers-color-scheme and set .dark on documentElement before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `;(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}}catch(e){} })()`
          }}
        />
        {/* Skip link for keyboard users */}
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white/90 focus:text-slate-900 focus:px-3 focus:py-2 rounded">
          Skip to content
        </a>
        {isAdmin ? null : <Navbar />}
        <main id="content" role="main" className={isAdmin ? "" : "pt-16 md:pt-20"}>
          {children}
        </main>
        {isAdmin ? null : <Footer />}
      </body>
    </html>
  );
}
