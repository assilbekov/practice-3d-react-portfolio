

const renderContent = {
  1: (
    <h1>1</h1>
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

const InfoBox = ({text, link, btnText}) => (
  <div></div>
)

export const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] ?? null;
}