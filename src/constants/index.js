import {
  brakes,
  autoElectrical,
  inspection,
  batteries,
  wipers,
  airConditioning,
  lights,
  genuineBoschParts
} from '../assets';

const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dylan proved me wrong.",
      name: "Peter Evgeniou",
      designation: "CFO",
      company: "Bosch Northcliff",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Kayla Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/woman/4.jpg",
    },
    {
      testimonial:
        "After Dylan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const services = [
    {
      title: "Brakes",
      icon: brakes,
    },
    {
      title: 'Auto Electrical',
      icon: autoElectrical,
    },
    {
      title: 'Inspection',
      icon: inspection,
    },
    {
      title: 'Batteries',
      icon: batteries,
    },
    {
      title: 'Wipers',
      icon: wipers,
    },
    {
      title: 'Air Conditioning',
      icon: airConditioning,
    },
    {
      title: 'Lights',
      icon: lights,
    },
  ];

  const serviceMe = [
    {
      title: "Booking",
      btnTitle: "Make A Booking",
      description: "Our car service booking process is unmatched in its simplicity, convenience, and reliability, making it the very best around. Whether you need to book a routine maintenance check-up, major repairs, or any other type of automotive service, our booking system will provide you with a hassle-free experience and a reliable ride."
    },
    {
      title: "Quote",
      btnTitle: "Get A Quote",
      description: "Our prices for car services are unmatched in their affordability, transparency, and value, making them the very best around. Whether you need a routine check-up, major repairs, or any other type of automotive service, our prices will provide you with peace of mind and a reliable ride."
    },
  ];

  export { testimonials, navLinks, services, serviceMe };