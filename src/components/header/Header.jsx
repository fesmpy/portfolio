import banner from '../../assets/banner.jpg';
import myphoto from '../../assets/myphoto.jpg';

import './headerStyle.css';

const Header = () => {
  return (
    <header className="header container-fluid p-0">
      <img className='banner img-fluid' src={banner} alt="Banner" />
      <img src={myphoto} alt="My photo profile" className='myphoto' />
    </header>
  )
}

export default Header