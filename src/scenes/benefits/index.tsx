import React from 'react';
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import YogaPoseSix from "@/assets/YogaPoseSix.png";
import YogaPoseSeven from "@/assets/YogaPoseSeven.png";
import YogaPoseEight from "@/assets/YogaPoseEight.png";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType & { icon: React.ReactNode }> = [
  {
    icon: <img src={YogaPoseSix} alt="Yoga Pose Six" className="h-16 w-16" />,
    title: "Online Yoga Classes",
    description: "We are here for the online Yoga classes that makes you fit and healthy at ypur home.",
  },
  {
    icon: <img src={YogaPoseSeven} alt="Yoga Pose Seven" className="h-16 w-16" />,
    title: "Online training with certification",
    description: "You can make your career in the Yoga world with certified yoga classes approved by patanjali",
  },
  {
    icon: <img src={YogaPoseEight} alt="Yoga Pose Eight" className="h-16 w-16" />,
    title: "Aurvedic therpy and store ",
    description: "You can fight with the diges with the yoga therapy say bye to old helth issus.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="health" className="mx-auto min-h-full w-5/6 pt-[100px] sl:pt-[50px]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          className="md:my-5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>योगः कर्मसु कौशलम्। <span className="text-primary-500">Health!</span></HText>
          <p className="my-5 text-base">
          When one acts with focus, without attachment to the results, and with a calm mind, they are practicing yoga in daily life.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          <img
            className="mx-auto mb-4 h-25 w-22"
            alt="page"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                  <HText>
                  MILLIONS OF DELIGHTED PARTICIPANTS ENGAGING IN{" "}
                    <span className="text-primary-500">YOGA</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Saroj Sharma is a dedicated and certified yoga instructor with over a decade of experience in guiding individuals toward mental, physical, and spiritual harmony. Specializing in Vinyasa, Hatha, and Ashtanga yoga, she has a passion for promoting holistic wellness. A world record holder in Parshva Janu Shirshasana Yoga, Saroj has been recognized for her exceptional flexibility, endurance, and breath control.

She has conducted diverse yoga classes for all levels, from beginners to advanced practitioners, focusing on mindfulness, flexibility, and strength. Saroj's contributions to yoga and wellness have been featured in ABVP News, and she has successfully trained countless clients to achieve their fitness and wellness goals.

Saroj is also the founder of Jai Shree Yog Sadhna Center in Jaipur, where she organizes yoga retreats, mindfulness workshops, and personalized yoga sessions. With expertise in pranayama, meditation, and injury rehabilitation, she combines her knowledge of human anatomy with a deep understanding of stress management techniques to provide a comprehensive wellness experience.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-[40px] before:right-[170px] before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}>
                Join Now
              </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
