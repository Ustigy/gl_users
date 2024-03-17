import React from 'react';
import './modal-content.css';

export default function ModalContent({ user, closeModal }) {

    const { name, phone, email, hire_date: hireDate, position_name: positionName, department } = user;

    return (
        <div className='modalContent'>
            <button onClick={closeModal} className='modalContent_icon_close' />

            <p className='modalContent_name dark_text'>
                {name}
            </p>

            <div className='modalContent_info'>
                <p className='modalContent_info_label dark_text'>
                    Телефон:
                </p>
                <p className='modalContent_info_value modalContent_phone light_text'>
                    {phone}
                </p>

                <p className='modalContent_info_label dark_text'>
                    Почта:
                </p>
                <p className='modalContent_info_value modalContent_email light_text'>
                    {email}
                </p>

                <p className='modalContent_info_label dark_text'>
                    Дата приема:
                </p>
                <p className='modalContent_info_value modalContent_hire_date light_text'>
                    {hireDate}
                </p>

                <p className='modalContent_info_label dark_text'>
                    Должность:
                </p>
                <p className='modalContent_info_value modalContent_position_name light_text'>
                    {positionName}
                </p>

                <p className='modalContent_info_label dark_text'>
                    Подразделение:
                </p>
                <p className='modalContent_info_value modalContent_department light_text'>
                    {department}
                </p>
            </div>

            <p className='modalContent_additional_title dark_text'>
                Дополнительная информация:
            </p>
            <p className='modalContent_additional_text light_text'>
                Разработчики используют текст в качестве заполнителя макта страницы.
                Разработчики используют текст в качестве заполнителя макта страницы.
            </p>




        </div>
    )

}
