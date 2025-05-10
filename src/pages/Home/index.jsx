import Typewriter from '../../components/TypeWriter';
import './home.styl';

const positions = ['Web Developer ', "Cloud Practitioner ", "Full-stack Developer ", "Software Engineer "];

const Home = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Yuchen Wang,</h1>
        <Typewriter
          words={positions}
          speed={120}
          pause={2500}
        />
      </div>
    </div>
  )
}

export default Home;