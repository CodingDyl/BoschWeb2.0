import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Services = () => {
  return (
    <section className="relative w-full h-screen mx-auto backdrop-blur-md">
        <div className={`${styles.paddingX} ${styles.paddingY} mx-auto flex flex-col justify-center items-center gap-10`}>
            <h2 className={`${styles.heroHeadText} mt-4`}>Is Your Car Due For It's Service?</h2>
            <p className={`${styles.heroSubText} text-white text-center`}>
            At Northcliff Auto we service all vehicle makes and models. Our team of dedicated mechanics constantly strive to ensure your vehicle is effectively serviced, repaired and maintained so that it’s driving at its best. Our state of the art diagnostic equipment is designed to diagnose a problem quickly and efficiently to avoid problems turning into major expenses.
            </p>
        </div>
    </section>
  )
}

export default Services