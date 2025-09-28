import statical from '../assets/Img/statical.png';
import '../assets/Header.css';


function Header() {
  return (
    
    <header role = "banner">
      <img src={statical} alt="statical logo" className="logo" />
      <h1>statical software</h1>
      <p>Organizador estadístico de datos</p>

        
    </header>
  );
}

export default Header
