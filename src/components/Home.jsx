import { motion } from 'framer-motion'
import { styles } from '../styles'
import { WorkshopCanvas } from './canvas'

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <span className="text-tertiary">Bosch Northcliff</span></h1>
          <div className="flex justify-start gap-3 w-full pt-4">
            <button className='btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Book a service</button>
            <button className='btn bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:opacity-100 !important'>Get a quote</button>
          </div>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Your one stop Auto Shop. Proud Member of Bosch Car Service.
          </p>
        </div>

      </div>
      <WorkshopCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home