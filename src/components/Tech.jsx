import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className='w-full h-full object-contain cursor-pointer'
            style={{
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg)";
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");