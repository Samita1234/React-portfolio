import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Resume from './resume.pdf';

function navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-list">
                <ul>
                    <li>
                        <Link activeClass="active" to="navbar" spy={true} smooth={true}>
                        Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="service" spy={true} smooth={true}>
                        Skils
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="n-right">
            <div className="n-cv">
                <a href={Resume} download>
                    <button className="button">
                        Download CV
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default navbar
