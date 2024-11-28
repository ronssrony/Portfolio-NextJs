import Image from "next/image";
import FloatingActionButtons from "../buttons/floatingbutton";
const SnapContent = ()=>{
    return (<>
  
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <Image
          src="/projects/snap.png"
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
          src="/projects/snap/loginauth.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200"></p>
      </div>
  
      <div
        key={"dummy-content7"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
       
        <Image
          src="/projects/snap/profile.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/profile</p>
      </div>
  
      <div
        key={"dummy-content3"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        
        <Image
          src="/projects/snap/chat.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/message/:Id</p>
      </div>
     
      <div
        key={"dummy-content4"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
       
        <Image
          src="/projects/snap/calling.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">Incoming Call</p>
      </div>
     
  
      <div
        key={"dummy-content5"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      
        <Image
          src="/projects/snap/vdocall.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">VideoCall</p>
      </div>
  
      <div
        key={"dummy-content9"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
       
        <Image
          src="/projects/snap/profileview.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/profile/:Id</p>
      </div>
      <div
        key={"dummy-content10"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
       
        <Image
          src="/projects/snap/choicelist.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/profile/:Id</p>
      </div>
      <div
        key={"dummy-content11"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
       
        <Image
          src="/projects/snap/bazar.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain mt-5" />
          <p className="text-center mt-2 font-sans dark:text-neutral-200">/products</p>
      </div>
      <div
        key={"dummy-content8"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-center flex justify-center items-center">
       <FloatingActionButtons name={"Source"} link={"https://github.com/ronssrony/community-imazine"}/>
       <FloatingActionButtons name={"Live"} link={"https://imazine.netlify.app/"}/>
     
      </div>
  
  </>);
  }

  export default SnapContent