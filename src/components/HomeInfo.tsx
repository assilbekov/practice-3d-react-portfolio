

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I'm <span className="text-2xl">Askhat</span> and I'm a <span className="text-2xl">Software Developer</span> from <span className="text-2xl">Kazakhstan</span>.
    </h1>
  ),
  2: (
    <h1>2</h1>
  ),
  3: (
    <h1>4</h1>
  ),
  4: (
    <h1>4</h1>
  ),
}

const InfoBox = ({ text, link, btnText }) => (
  <div></div>
)

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] ?? null;
}