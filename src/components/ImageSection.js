import React from 'react';
import about from '../images/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Priyanka Bajaj</span></h4>
                <p className="about-text">
                    I am a student studying at the University of Waterloo.
                    I am currently doing my UG and majoring in computer science!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Priyanka Amit Bajaj</p>
                        <p>: 18</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: 161 University Ave W, Waterloo, ON N2L 3E5, Canada</p>
                        <p>: Bahrain, Canada</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;