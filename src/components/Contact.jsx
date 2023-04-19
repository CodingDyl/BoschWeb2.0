import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { CarCanvas } from './canvas';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';
import CarCanvas2 from './canvas/CarCanvas2';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        email: '',
        contact: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        
    }

    const handleSubmit = (e) => {
    }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
            variants={slideIn}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl' 
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Contact Number</span>
            <input
              type='number'
              name='contact'
              value={form.contact}
              onChange={handleChange}
              placeholder="What's your contact number?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
            </form>

        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' >
            <CarCanvas2 />
        </motion.div>

        
    </div>
  )
}

export default SectionWrapper(Contact, "contact");