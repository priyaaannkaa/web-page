import React from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        Detail-oriented, motivated and bright student looking for an opportunity to work in your esteemed organization to bridge theory with
                        practical and real-world experience.
                    </p>
                    <div className="icons">
                        <a className= "icon-holder" href ="https://www.linkedin.com/in/priyanka-bajaj-435600211/">
                            <FontAwesomeIcon className= 'icon li' icon={faLinkedin} />
                        </a>
                        <a className= "icon-holder" href ="https://github.com/priyaaannkaa">
                            <FontAwesomeIcon className= 'icon gh' icon={faGithub} />
                        </a>
                        <a className= "icon-holder" href ="https://www.facebook.com/PriyankaBajaj1906/">
                            <FontAwesomeIcon className= 'icon fb' icon={faFacebook} />
                        </a>
                        <a className= "icon-holder" href ="https://www.instagram.com/priyaaannkaa/">
                            <FontAwesomeIcon className= 'icon ig' icon={faInstagram} />
                        </a>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default HomePage;