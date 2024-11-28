import Image from "next/image";
import FloatingActionButtons from "../buttons/floatingbutton";
const GembookContent = ()=>{
    return (<>
  
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <Image
          src="/projects/gembook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/</p>
      </div>
     
      <div
        key={"dummy-content8"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-center flex justify-center items-center">
       <FloatingActionButtons name={"Source"} link={"https://github.com/ronssrony/book_Store"}/>
      
     
      </div>
  
  </>);
  }

  export default GembookContent