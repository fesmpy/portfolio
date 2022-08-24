import './aboutStyle.css';

const About = () => {
  return (
    <section className="about ps-md-5 pe-md-5 ps-3 pe-3 pt-md-5 text-md-center" data-bs-spy='scroll' data-bs-target='#navbar-container' data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0" active='true'>
      <h2 className="text-uppercase fw-bolder" id='about'>About</h2>
      <p className='col-md-6 offset-md-3 '>
      Hello, my name is Fabio, I'm a Front-End Developer located in Paraguay. I'm a Well-organized person, problem solver with high attention to detail. I love learning new things every day, I like soccer, listening to music with friends and traveling.
      </p>
    </section>
  )
}

export default About