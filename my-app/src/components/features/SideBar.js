import React from 'react';
import logo from '../../logo.svg';

export default function SideBar({ headings }) {
  const handleScroll = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const listItems = headings.map(h => (
    <li key={h.id}>
      <a 
        href={`#${h.link}`} 
        onClick={(e) => handleScroll(e, h.link)}
      >
        {h.title}
      </a>
    </li>
  ));

  return (
    <div className="SideBar">
      <LloydsLogo />
      <Title />
      <ol>{listItems}</ol>
    </div>
  );
}

function LloydsLogo() {
  return <img className="Logo" src={logo} alt="Lloyds Banking Logo" />;
}

function Title() {
  return <p className='Title'>Mortgage Calculator</p>;
}