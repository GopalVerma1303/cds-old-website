"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { FeatureCard, NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const CodeOfConduct = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Code Of Conduct" textStyles="text-center" />
      <TitleText title={<>Our Values</>} textStyles="text-center" />

      <div className="mt-[48px] flex flex-wrap justify-evenly gap-[18px]">
        {newFeatures.map((feature) => (
          // <NewFeatures key={feature.title} {...feature} />
          <FeatureCard key={feature.title} imgUrl={feature.imgUrl} title={feature.title} {...feature} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default CodeOfConduct;
