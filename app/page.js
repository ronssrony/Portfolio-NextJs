import { AppleCardsCarouselDemo } from "@/components/card/AppleCardsCarouselDemo";
import { AnimatedTooltipPreview } from "@/components/card/ClientTooltip";
import { AnimatedTestimonialsDemo } from "@/components/card/testimonials";
import Image from "next/image";

export default function Home() {
  return (
   
     <div className="flex flex-col gap-16">
  
   <main className="flex justify-center flex-col items-center mt-20 gap-6">
      <h2 className="text-7xl font-semibold text-center text-slate-200">From Concept to Creation Discover My Projects</h2>
      
      <AnimatedTestimonialsDemo/>
     <p className="p-2 w-2/3 text-slate-300 text-center">
     I’m a versatile developer with expertise in building secure, scalable web applications using <strong>Node.js</strong>, <strong>React</strong>, <strong>Next.js</strong>, and <strong>Express</strong>. I specialize in both <strong>SQL</strong> and <strong>NoSQL</strong> databases, with hands-on experience in <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>. My passion for innovation drives me to explore different frameworks like <strong>Java Spring Boot</strong>, <strong>Ruby on Rails</strong>, and <strong>Laravel</strong>, pushing my limits to adapt and solve complex challenges.  My goal is to create flexible, optimized solutions that exceed expectations and drive success.
      </p>
       </main>
       <div className="flex flex-col gap-10">
       <h2 className="text-2xl  text-gray-500 ">Technology Expertise</h2>
       <AnimatedTooltipPreview/>
       </div>
         
       <div className="flex flex-col gap-5 items-center ">
        <h2 className="text-4xl font-semibold text-slate-300 text-center tracking-wider">IMAZINE</h2>
         <div className="w-full flex justify-center md:gap-20 flex-wrap ">
         <video className="w-3/5 max-md:h-[45vh] max-md:w-5/6 " src="/mazn.mp4" autoPlay  playsInline  muted loop ></video>
         <video className=" w-5/6  md:w-1/4 md:h-[73.5vh] " src="/mobilemazn.mp4" autoPlay  playsInline  muted loop ></video>
         </div>
        </div>  
       
       <AppleCardsCarouselDemo/>
     </div>
  );
}
