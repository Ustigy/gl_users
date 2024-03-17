import React from 'react';
import './card.css';

export default function Card({ user, onClick }) {

    const { name, phone, email } = user;

    return (
        <div className='card' onClick={onClick}>
            <p className='card_name dark_text'>
                {name}
            </p>
            <div className='card_icon card_icon_phone'>
                <p className='card_phone light_text'>
                    {phone}
                </p>
            </div>
            <div className='card_icon card_icon_email'>
                <p className='card_email light_text'>
                    {email}
                </p>
            </div>
        </div>
    )

}
