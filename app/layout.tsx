import type { Metadata } from "next";
import { Caveat } from 'next/font/google'
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/foot/Footer";
import Providers from "./Providers";
import gradientImg from "@/public/images/gradient.webp";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "falcon71181",
  description: "falcon71181 is a online name of Abhay Thakur (a FullStack Developer). Originally from Himachal Pradesh. Describe himself as TypeScript Dev. , currently learning Rust.",
};

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`scroll-smooth ${caveat.variable}`}>
        <Providers>
          <section className="h-screen w-screen flex justify-center">
            <main className="h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 flex flex-col transition-all duration-500">
              <NavBar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </main>
          </section>
          <Image
            className="absolute left-1/2 md:left-1/2 top-0 -z-50 -translate-x-1/2 lg:scale-100 object-cover w-full"
            src={gradientImg}
            role="presenation"
            alt="Gradient background"
            priority
          />
        </Providers>
      </body>
    </html>
  );
}
