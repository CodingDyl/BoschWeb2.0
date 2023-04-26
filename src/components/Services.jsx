import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { serviceMe } from '../constants';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { Link } from 'react-router-dom';
import Booking from './booking/Booking';

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleBooking = () => {
    setOpen(!open);
  };

    const ServiceCard = ({ index, title, description, btnTitle }) => (
      <>
        <Tilt className='xs:w-[303px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-primary rounded-[20px] py-5 px-12 min-h-[350px] w-[300px] flex justify-evenly items-center flex-col'
            >
    
              <h3 className='text-secondary text-[20px] font-bold text-center'>
                {title}
              </h3>

              <p className="text-secondary text-[12px] font-normal text-center ">{description}</p>

              {title === 'Booking' ? (
                    <button className='btn bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary' onClick={handleBooking}>{btnTitle}</button>
                ) : (
                  <button className='btn bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary'>{btnTitle}</button>
                )}

            </div>
          </motion.div>
        </Tilt>
        <Booking open={open} close={() => setOpen(false)}/>
      </>
      );


  return (
    <section className="w-full h-screen mx-auto backdrop-blur-md">
        <div className={`${styles.paddingX} ${styles.paddingY} mx-auto flex flex-col justify-center items-center gap-5`}>
            <h2 className={`${styles.heroHeadText} text-center`}>Is Your Car Due For It's Service?</h2>
            <p className={`${styles.heroSubText} text-white text-center`}>
            At Northcliff Auto we service all vehicle makes and models. Our team of dedicated mechanics constantly strive to ensure your vehicle is effectively serviced, repaired and maintained so that it’s driving at its best. Our state of the art diagnostic equipment is designed to diagnose a problem quickly and efficiently to avoid problems turning into major expenses.
            </p>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-40'>
                {serviceMe.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
      </div>
        </div>
    </section>
  )
}

export default Services