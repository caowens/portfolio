import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { certificateicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { projects } from "../constants";
import { certificates } from "../constants";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black-200 p-5 rounded-3xl sm:w-[320px] w-full"
    >
      <div className="mt-1">
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={certificateicon}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-semibold text-[20px]">{name}</h3>
          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've Been Certified In</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {certificates.map((project, index) => (
          <CertificateCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
