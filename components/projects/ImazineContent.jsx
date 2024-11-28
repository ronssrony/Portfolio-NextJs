import Image from "next/image";
import FloatingActionButtons from "../buttons/floatingbutton";
const ImazineContent = () => {
    return (<>
  
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <Image
              src="/projects/imazine.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/</p>
          </div>
         
          <div
            key={"dummy-content2"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            </p>
            <Image
              src="/projects/mazncategory.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/collection/woman</p>
          </div>
  
          <div
            key={"dummy-content7"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
           
            <Image
              src="/projects/mazncollection.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/collection/woman</p>
          </div>
  
          <div
            key={"dummy-content3"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            
            <Image
              src="/projects/maznview.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/collection/woman</p>
          </div>
         
          <div
            key={"dummy-content4"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
           
            <Image
              src="/projects/maznrecommned.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/product/:Id</p>
          </div>
          <div
            key={"dummy-content9"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
           
            <Image
              src="/projects/stripepayment.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/checkout.stripe.com</p>
          </div>
  
          <div
            key={"dummy-content5"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          
            <Image
              src="/projects/maznlogin.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
              <p className="text-center mt-2 font-sans dark:text-neutral-200">/user/registration</p>
          </div>
  
          <div
            key={"dummy-content8"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-center flex justify-center items-center">
           <FloatingActionButtons name={"Source"} link={"https://github.com/ronssrony/MAZN"}/>
           <FloatingActionButtons name={"Live"} link={"https://mazn.onrender.com/"}/>
         
          </div>
          
  
    </>);
  };

  export default ImazineContent