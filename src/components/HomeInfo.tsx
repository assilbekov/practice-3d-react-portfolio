import { Link } from "react-router-dom";
import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I'm <span className="text-2xl">Askhat</span> and I'm a <span className="text-2xl">Software Developer</span> from <span className="text-2xl">Kazakhstan</span>.
    </h1>
  ),
  2: (
    <InfoBox text="Worked with many companies and picked up many skills" link="/about" btnText="Learn more" />
  ),
  3: (
    <InfoBox text="Led multiple projects into success over the years. Curious about impact" link="/projects" btnText="Visit my portfolio" />
  ),
  4: (
    <InfoBox text="Need a project done or looking for a dev? I'm just few keystrokes away" link="/contact" btnText="Let's talk" />
  ),
}

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] ?? null;
}