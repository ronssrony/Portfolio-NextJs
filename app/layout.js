
import { Inter } from 'next/font/google'
import "./globals.css";

import { TracingBeam } from '@/components/ui/tracing-beam';
import { NavbarDemo } from '@/components/Navbar/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
})
 
export const metadata = {
  title: "Rony's",
  description: "Everything is done by Md Abdullah Al Mamun",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">   
      <body
        className={` ${inter.className} antialiased p-8 selection:bg-slate-500 max-w-screen-2xl mx-auto`}
      >
      <div className='flex  text-lg'>
        <NavbarDemo/>
      
      </div>
        <TracingBeam>

        {children}
        </TracingBeam>x
      </body>
    </html>
  );
}
