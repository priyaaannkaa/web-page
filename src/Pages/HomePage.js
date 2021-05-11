import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="hero">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am
                        <span> Priyanka Bajaj.</span>
                    </h1>
                    <p className="h-sub-text">
                        This is test line!
                    </p>
                    <div className="icons">
                        <Link className= "icon-holder">
                            <FontAwesomeIcon className= 'icon li' icon={faLinkedin} />
                        </Link>
                        <Link className= "icon-holder">
                            <FontAwesomeIcon className= 'icon fb' icon={faFacebook} />
                        </Link>
                        <Link className= "icon-holder">
                            <FontAwesomeIcon className= 'icon ig' icon={faInstagram} />
                        </Link>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HomePage;