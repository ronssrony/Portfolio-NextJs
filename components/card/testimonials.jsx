import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A responsive and fully functional Node.js e-commerce app using Express, Tailwind CSS, JWT for authentication, Passport.js for social login, and Stripe for payments.",
      name: "Imazine",
      designation: "E-Commerce Website For Fashion",
      src: "/projects/imazine.png",
    },
    {
      quote:
        "React for frontend, Socket.IO for messaging, WebRTC for video calls, Context API for state, Node.js backend, Redis for optimization, SWR/React Query for client-side caching, and MongoDB",
      name: "Snap",
      designation: "Social Media Website Top of Imazine",
      src: "/projects/snap.png",
    },
 
    {
      quote:
        "Using Node.js and Socket.io, featuring real-time location tracking on a Leaflet map, allowing users to see their own and others' positions in the network.",
      name: "Tracker",
      designation: "Track in Real Time, Connect Anytime.",
      src: "/projects/tracker.png",
    },
    {
      quote:
        "A Ruby on Rails app with RESTful architecture and MVC pattern. Implemented TurboStream, Action Mailer, Active Job, Action Mailbox, session management, and email notifications.",
      name: "Gembook",
      designation: "E-commerce book store",
      src: "/projects/gembook.png",
    },
    {
      quote:
        "Apple Gadget clone with HTML, CSS, Ruby on Rails; featuring a production-level navbar for large categories, product showcase, animated and static ads, and dynamic content injection",
      name: "AppleGadget Clone",
      designation: "E-commerce for Electronics",
      src: "/projects/applegadget.png",
    },
  
    {
      quote:
        "Created a SPA with vanilla HTML, CSS, and JavaScript featuring a music player, e-commerce site, animated product showcase, and animations like Facebook-like system and Instagram double-tap to like.",
      name: "Redbanana",
      designation: "Some Ranodm Stuff",
      src: "/projects/redbanana.png",
    },
  
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
