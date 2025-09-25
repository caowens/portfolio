import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { contacts } from "../constants";

const ContactIcon = ({
  link,
  icon,
  detail,
}) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
      style={{
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(15deg)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
    >
      <img
        src={icon}
        alt={detail}
        className="w-3/4 h-3/4 object-contain"
      />
    </div>
    
  );
};

const Contact = () => {

  return (
    <div className="xl:mt-12 xl:flex-row flex gap-10 justify-center text-center overflow-hidden">
      <motion.div
        variants={fadeIn("", "spring", 0, 0.75)}
        className="flex-[0.75] flex flex-col gap-4 bg-black-100 p-8 rounded-2xl"
      >
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>
        <div className="flex justify-center gap-4">
          {contacts.map((contact) => (
            <ContactIcon 
              key={contact.method}
              link={contact.link}
              icon={contact.icon}
              detail={contact.detail}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");