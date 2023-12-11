'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} md:mt-80 lg:mt-0 z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white"
      >
        <span className="font-extrabold text-white">Code Deploying Squad</span> is vibrant open-source community of <span className="font-extrabold text-white">developers</span>, passionate about 
        creating innovative solutions. Our <span className="font-extrabold text-white">mission</span> is to foster a collaborative environment where developers of <span className="font-extrabold text-white">all backgrounds</span> come together to learn, share, and build <span className="font-extrabold text-white">impactful projects</span>. 
        With a <span className="font-extrabold text-white">diverse</span> range of expertise spanning web development, machine learning, and more, we offer a supportive space for continuous growth. <span className="font-extrabold text-white">What sets us apart</span> is our commitment to real-world applications and a culture of active collaboration. Whether you're a <span className="font-extrabold text-white">seasoned pro</span> or <span className="font-extrabold text-white">just starting out</span>, join us in shaping the future of technology. Together, we're not just <span className="font-extrabold text-white">writing code</span>; we're <span className="font-extrabold text-white">deploying solutions</span>.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
