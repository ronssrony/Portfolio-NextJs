
import { Inter } from 'next/font/google'
import "./globals.css";
import Link from 'next/link';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { NavbarDemo } from '@/components/Navbar/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
})
 
export const metadata = {
  title: "RONY'S",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={` ${inter.className} antialiased p-8 selection:bg-slate-500`}
      >
      <div className='flex justify-end'>
        <NavbarDemo/>
      </div>
        <TracingBeam>

        {children}
        </TracingBeam>
      </body>
    </html>
  );
}
