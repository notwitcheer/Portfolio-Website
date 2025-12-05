import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="/witcheer-pfp.png" alt="Witcheer Profile Picture" className="logo" />
        <h1>Witcheer</h1>
      </div>
      <p>Showcasing my work and projects – Inspired by innovation and community</p>
      <p className="developer-title">React & Next.js Developer</p>
    </header>
  );
};

export default Header;
