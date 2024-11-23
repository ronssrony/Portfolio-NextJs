
import { AnimatedModalDemo } from "@/components/buttons/Modalbutton";
import { AppleCardsCarouselDemo } from "@/components/card/AppleCardsCarouselDemo";
import { AnimatedTooltipPreview } from "@/components/card/ClientTooltip";
import { AnimatedTestimonialsDemo } from "@/components/card/testimonials";




export default function Home() {
  return (
   
     <div className="flex flex-col gap-16">
     <main className="flex justify-center flex-col items-center mt-20 gap-6">
      <h2 className="text-7xl font-semibold text-center text-slate-200">From Concept to Creation Discover My Projects</h2>
            
     <p className="p-2 w-2/3 text-slate-300 text-center">
     Expert in building secure, scalable applications with <strong>Node.js</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Next.js</strong>. I specialize in both <strong>SQL</strong> and <strong>NoSQL</strong> databases, crafting optimized solutions that meet diverse business needs. Passionate about innovation drives me to explore different frameworks like <strong>Ruby on Rails</strong>, <strong>Spring Boot</strong>,  and <strong>Laravel</strong>.
      </p>
     <AnimatedModalDemo/>
       </main>
       <AnimatedTestimonialsDemo/>
       <div className="flex flex-col gap-10">
       <h2 className="text-2xl  text-gray-500 ">Technology Expertise</h2>
       <AnimatedTooltipPreview/>
       <AppleCardsCarouselDemo/>
       </div>
       


       
     </div>
  );
}
