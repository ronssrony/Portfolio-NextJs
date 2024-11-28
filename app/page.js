
import { AnimatedModalDemo } from "@/components/buttons/Modalbutton";
import { AppleCardsCarouselDemo } from "@/components/card/AppleCardsCarouselDemo";
import { AnimatedTooltipPreview } from "@/components/card/ClientTooltip";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/card/ShottingstarsDemo";


export default function Home() {
  return (
   
     <div className="flex flex-col gap-10 md:px-10">
      <ShootingStarsAndStarsBackgroundDemo/>
     <main className="flex justify-center flex-col items-center mt-16 gap-5">
     <div className="relative flex flex-col items-center py-4">
  <div className="relative">
    <img
      src="/mine/upload.jpg"
      alt="Profile"
      className="w-20 h-20 rounded-full  mb-2"
    />
    <img
      src="/bangladesh1.png"
      alt="Flag"
      className="absolute  bottom-1 right-0 w-6 h-6 border-2 border-gray-800 rounded-full brightness-75"
    />
  </div>
  <h3 className="text-lg font-semibold text-white">Md Abdullah Al Mamun</h3>
  <div className="flex items-center text-sm text-gray-400">
    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
    <span>Available to work</span>
  </div>
</div>



     <p className="p-2 w-2/3 text-slate-300 text-center  ">
     Expert in building secure, scalable applications with <strong>Node.js</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Next.js</strong>. I specialize in both <strong>SQL</strong> and <strong>NoSQL</strong> databases, crafting optimized solutions that meet diverse business needs. Passionate about innovation drives me to explore different frameworks like <strong>Ruby on Rails</strong>, <strong>Spring Boot</strong>,  and <strong>Laravel</strong>.
      </p>
     <AnimatedModalDemo/>
       </main>

       <div className="flex flex-col gap-10 md:px-40 px-10">
       <h2 className="text-2xl  text-gray-500 ">Technology Expertise</h2>
       <AnimatedTooltipPreview/>
      
       </div>
       <AppleCardsCarouselDemo/>


       
     </div>
  );
}
