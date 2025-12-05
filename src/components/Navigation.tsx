import './Navigation.css';

const Navigation = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
            Achievements
          </a>
        </li>
        <li>
          <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#support" onClick={(e) => handleNavClick(e, 'support')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
