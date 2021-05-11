import React from 'react';

function ContactItem(props) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={props.icon} alt="" />
                <div className="right-items">
                    <h6>{props.title}</h6>
                    <p>{props.text1}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;