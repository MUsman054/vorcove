import Logo from './Logo.jsx';
import { EMAIL, services } from '../data/content.js';

<<<<<<< HEAD
const company = [['About', '#about'], ['LinkedIn', 'https://www.linkedin.com/company/vorcove-studio/'], ['Industries', '#industries'], ['Leadsmith', '#leadsmith'], ['EventSmith', '#eventsmith'], ['How we work', '#process'], ['FAQ', '#faq']];
=======
const company = [['About', '#about'], ['Industries', '#industries'], ['Leadsmith', '#leadsmith'], ['EventSmith', '#eventsmith'], ['How we work', '#process'], ['FAQ', '#faq']];
>>>>>>> 2e2fc8aa18856854de78d13c832473ec172e257a
const contact = [[EMAIL, `mailto:${EMAIL}`], ['Book a business review', '#contact']];

const Column = ({ title, links }) => (
  <div>
    <h4>{title}</h4>
<<<<<<< HEAD
    <ul>{links.map(([label, href]) => (
      <li key={label}>
        {href.startsWith('http')
          ? <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          : <a href={href}>{label}</a>}
      </li>
    ))}</ul>
=======
    <ul>{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
>>>>>>> 2e2fc8aa18856854de78d13c832473ec172e257a
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Logo />
<<<<<<< HEAD
            <p>We build systems that fix lost revenue, built on the tools you already use.</p>
=======
            <p>We engineer systems that directly expand your business revenue, built on the tools you already use.</p>
>>>>>>> 2e2fc8aa18856854de78d13c832473ec172e257a
          </div>
          <Column title="Services" links={services.map(s => [s.title, '#services'])} />
          <Column title="Company" links={company} />
          <Column title="Contact" links={contact} />
        </div>
        <p className="giant" aria-hidden="true">vorcove</p>
        <div className="legal"><span>© {new Date().getFullYear()} Vorcove. All rights reserved.</span><a href="#top">Back to top</a></div>
      </div>
    </footer>
  );
}
