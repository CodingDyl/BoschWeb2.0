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
        "The only place I would recommend taking your vehicle.Fantastic and professional service.",
      name: "Callen Valkenburg",
      designation: "Client",
      company: "Northcliff Resident",
      image: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      testimonial:
        "Very professional. It’s the only place I trust to take my car for any kind of repair or check.",
      name: "Jessica Franklin",
      designation: "Client",
      company: "Northcliff Resident",
      image: "https://randomuser.me/api/portraits/lego/4.jpg",
    },
    {
      testimonial:
        "The only place I would recommend taking your vehicle.Fantastic and professional service.",
      name: "Annemarie Stierlin",
      designation: "Client",
      company: "Northcliff Resident",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
  ];

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
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