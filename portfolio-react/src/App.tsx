import MatrixBackground from './components/MatrixBackground';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CopyableAddress from './components/CopyableAddress';
import { FaGithub, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import './App.css';

function App() {
  const projects = [
    {
      title: 'BeraLand Website',
      description: 'React, Typescript, Next.js.',
      link: 'https://beraland.net',
    },
    {
      title: 'Crypto Converter',
      description: 'Python, HTML, CSS, JSCRIPT.',
      link: 'https://witcheercryptoconverter.netlify.app/',
    },
    {
      title: 'Crypto Surveillance',
      description: 'Python, HTML, CSS, JSCRIPT, API Requests.',
      link: 'https://witcheersurveillance.netlify.app/',
    },
  ];

  return (
    <>
      <MatrixBackground />
      <Navigation />
      <Header />
      <main>
        <Section id="testimonials" title="Testimonials">
          <blockquote>"To Be Written." – Client A</blockquote>
          <blockquote>"To Be Written." – Client B</blockquote>
        </Section>

        <Section id="projects" title="Achievements">
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </Section>

        <Section id="team" title="About Me">
          <div className="team-members">
            <div className="team-member">
              <img
                src="/witcheer-pfp.png"
                alt="Witcheer Profile Picture"
                className="profile-img"
              />
              <h3>Witcheer</h3>
              <p>React & Next.js Developer</p>
              <a href="https://x.com/witcheer" target="_blank" rel="noopener noreferrer">
                @witcheer
              </a>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact Me">
          <form action="https://formspree.io/f/xwpnvzlb" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </Section>

        <Section id="support" title="Reach or Support Me">
          <p>Help support my work or reach me out.</p>
          <div className="support">
            <div className="support-option">
              <h3>Donate</h3>
              <p>Ethereum:</p>
              <CopyableAddress address="0xdfdBaD57cA8787923469E258d20660153a75eD66" />
              <p>Solana:</p>
              <CopyableAddress address="6xAa8mEVVz3BeQcUkXKbLeuH4shU2pL41sALPq3QaVoP" />
            </div>
            <div className="support-option">
              <h3>Reach Me</h3>
              <div className="social-links">
                <a href="https://github.com/notwitcheer" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub className="social-icon" />
                  <span>notwitcheer</span>
                </a>
                <a href="https://t.me/xWitcheer" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTelegram className="social-icon" />
                  <span>xWitcheer</span>
                </a>
                <a href="https://x.com/witcheer" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaXTwitter className="social-icon" />
                  <span>witcheer</span>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
