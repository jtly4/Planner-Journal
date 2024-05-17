
const FeatureCard = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <img src={props.imgTitle} alt = "icon"/>
    </>
  )
}

const Features = () => {
  return (
    <>
      <FeatureCard title="Create Events" imgTitle="/images/calendar_icon.png"/>
      <FeatureCard title="Add Memories" imgTitle="/images/journal_icon.png"/>
      <FeatureCard title="Add Expenses" imgTitle="/images/dollar_icon.png"/>
    </>
  )
};

// function Home() {
  const Home = () => {
  return(
    <Features/>
  )
}
export default Home;