import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../images/phone.svg';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import Title from '../components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.013768882925!2d-80.54558676595616!3d43.47096293843788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf406974e6091%3A0xfe7272f136b64cec!2sWilmot%20Court!5e0!3m2!1sen!2sca!4v1620561253856!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{border:0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={"+1 647-518-9155"} title="Phone"/>
                    <ContactItem icon={email} text1={"bajajpriyanka619@gmail.com"} title="E-mail"/>
                    <ContactItem icon={location} text1={'161 University Ave W, Waterloo, ON N2L 3E5, Canada'} title="Address"/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
