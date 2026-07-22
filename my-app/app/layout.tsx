import './globals.css'
import type { Metadata } from "next";
import { Noto_Serif_TC } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({ 
  variable: "--font-noto-tc",
  weight: ['400', '500', '700', '900'],
  preload: false,
})

export const metadata: Metadata = {
  title: "大誠加油站總站 CPC Corporation_奕誠文教事業",
  description: "大誠加油站總站 CPC Corporation_奕誠文教事業",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifTC.variable} h-full antialiased`}
    >
      <body className={`min-h-screen flex flex-col font-sans`}>        
        <div className="flex min-h-screen">
          <div className="bg-white w-full">
            {children}
          </div>            
        </div>
      </body>
    </html>
  );
}
