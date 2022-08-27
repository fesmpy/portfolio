import './navStyle.css';
import logo from '../../assets/footerLogo.png';

const Nav = () => {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark sticky-top" id='navbar-container'>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logo} alt="logo" className='logo img-fluid' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-black ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav