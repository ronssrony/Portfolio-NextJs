"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import FloatingActionButtons from "../buttons/floatingbutton";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20 flex flex-col">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Project Docs
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const ImazineContent = () => {
  return (<>

        <div
          key={"dummy-content"}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Built a fully server-side rendered (SSR) e-commerce platform 
            </span>{" "}
  using the <strong className="font-bold text-neutral-700 dark:text-neutral-200" >EJS</strong> templating engine. The platform is fully responsive, styled with <strong className="font-bold text-neutral-700 dark:text-neutral-200">Tailwind CSS</strong> , featuring secure <strong className="font-bold text-neutral-700 dark:text-neutral-200">JWT</strong> authentication, Google,
Facebook, and Twitter login <strong className="font-bold text-neutral-700 dark:text-neutral-200" >(Passport.js)</strong>. Integrated <strong className="font-bold text-neutral-700 dark:text-neutral-200">Stripe</strong> for payments, an admin panel
for product management, file uploads <strong className="font-bold text-neutral-700 dark:text-neutral-200">(Multer)</strong>, and a basic <strong className="font-bold text-neutral-700 dark:text-neutral-200"  >recommendation feature</strong>.
Included advanced search with product filters.
          </p>
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
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            After clicking on a category like Men, Women, or Kids, the app dynamically queries the appropriate products from <strong className="font-bold text-neutral-700 dark:text-neutral-200" >MongoDB Atlas</strong> and renders them using the <strong className="font-bold text-neutral-700 dark:text-neutral-200" >EJS templating engine</strong>.
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
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            After clicking on a collection, we can further refine it by filtering through categories like T-shirts, Shirts, Jeans, Jackets, etc., ensuring a seamless browsing experience.
          </p>
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
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            By clicking View All, you can further filter the collection by Price, Size, and Color, allowing for a more tailored shopping experience.
          </p>
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
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
            By clicking on a product, you can view its detailed information along with similar products dynamically queried from <strong className="font-bold text-neutral-700 dark:text-neutral-200" >MongoDB Atlas</strong>. The quantity and price update dynamically based on user input, providing an interactive shopping experience.
          </p>
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
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}

            After clicking the Place Order button, a secure payment process is initiated, handled seamlessly by <strong className="font-bold text-neutral-700 dark:text-neutral-200" >Stripe</strong> for reliable and efficient transaction management.
          </p>
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
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">

            </span>{" "}
      
This is the login page, which manages authentication using <strong className="font-bold text-neutral-700 dark:text-neutral-200" >JWT</strong> stored in cookies for secure session management. For social login, <strong className="font-bold text-neutral-700 dark:text-neutral-200" >Passport.Js</strong> is implemented, enabling seamless authentication through <strong className="font-bold text-neutral-700 dark:text-neutral-200" >Google, Facebook, and Twitter</strong>.
          </p>
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
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-center">
       
       <FloatingActionButtons/>
         
        </div>
        

  </>);
};

const data = [
  {
    category: "Imazine",
    title: "NodeJs App",
    src: "/projects/imazine.png",
    content: <ImazineContent />,
  },
  {
    category: "Snap",
    title: "Social Media Website",
    src: "/projects/snap.png",
    content: <ImazineContent />,
  },
  {
    category: "Gembook",
    title: "E-commerce Book Store",
    src: "/projects/gembook.png",
    content: <ImazineContent />,
  },

  {
    category: "AppleGadget",
    title: "E-commerce for Electronics",
    src: "/projects/applegadget.png",
    content: <ImazineContent />,
  },
  {
    category: "Redbanana",
    title: "Random Features",
    src: "/projects/redbanana.png",
    content: <ImazineContent />,
  },
  
];
