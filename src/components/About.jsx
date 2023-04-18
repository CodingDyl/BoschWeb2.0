import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';

const About = () => {

    const ServiceCard = ({ index, title, icon }) => (
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full black-gradient p-[1px] rounded-[20px] shadow-card border border-white'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
              />
      
              <h3 className='text-primary text-[20px] font-bold text-center'>
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      );

  return (
    <>
        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Bosch Northcliff</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Welcome to Bosch Northcliff, a trusted and reliable auto workshop that provides high-quality automotive services to car owners in Northcliff and the surrounding areas.

We are a team of skilled and experienced mechanics who are dedicated to delivering top-notch car maintenance and repair services to our valued customers. Our workshop is equipped with state-of-the-art tools and equipment, and we use only genuine parts and high-quality oils and fluids to ensure that your car runs smoothly and reliably.

At Bosch Northcliff, we understand that your car is an important part of your life, and we take great care to ensure that it is always in top condition. Whether you need a routine service, an engine overhaul, or any other type of repair work, we have the expertise and knowledge to get the job done right the first time.

We pride ourselves on providing excellent customer service, and we always aim to exceed your expectations. Our friendly and knowledgeable staff are always on hand to answer any questions you may have about your car, and we are committed to keeping you informed every step of the way.

So, if you're looking for a reliable and trustworthy auto workshop in Northcliff, look no further than Bosch Northcliff. Contact us today to schedule an appointment, and let us take care of your car's maintenance and repair needs.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");