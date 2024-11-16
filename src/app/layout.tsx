import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from './logo.png';
import { WelcomeModal } from "@/components/modal/WelcomeModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MakeupArtistry_Kor | Professional Makeup Artist",
  description: "Experience the art of Korean beauty with our professional makeup services. Specializing in bridal, special occasion, and K-beauty transformations. Book your personalized makeup session today.",
  icons: [{
    rel:'icon',
    url: Logo.src,
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <WelcomeModal />
        {children}
      </body>
    </html>
  );
}