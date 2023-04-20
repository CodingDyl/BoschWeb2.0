import React from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rmi } from '../assets';
import { slideIn } from '../utils/motion';

const Footer = () => {
  return (
    <>
    <div className="bg-black-100 flex items-start mx-auto justify-around py-20 px-40 w-full">
        <div className="flex flex-col items-center gap-5">
            <p className={styles.sectionSubText}>About us</p>
            <ul className="flex flex-col decoration-none mt-2">
                <li className="text-[18px] text-white hover:text-[#B2BEB5]"><Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>Home</Link></li>
                <li className="text-[18px] text-white hover:text-[#B2BEB5]"><Link to="/services" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>Services</Link></li>
                <li className="text-[18px] text-white hover:text-[#B2BEB5]"><Link to="/contact" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>Contact</Link></li>
            </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
            <p className={styles.sectionSubText}>Get in Touch</p>
            <ul className="flex flex-col decoration-none mt-2">
                <li className="text-[18px] text-white hover:text-[#B2BEB5]"><Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>Book A Service</Link></li>
                <li className="text-[18px] text-white hover:text-[#B2BEB5]"><Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>Request A Quote</Link></li>
            </ul>
        </div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex items-center justify-start gap-5">
            <img src={rmi} alt="logo" />
        </motion.div>
    </div>
    <div className="mx-auto px-40 py-10 flex justify-center items-center w-full">
        <h4 className={styles.sectionSubText}>&copy;2023 Bosch Northcliff. Bosch Auto Workshop, South Africa. All Rights Reserved</h4>
    </div>
    </>
  )
}

export default Footer