import React from 'react';
import { useState } from 'react';
import './card-list.css';
import Card from '../card/card';
import Modal from 'react-modal';
import ModalContent from '../modal-content/modal-content';


export default function CardList({ users }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [openUser, setOpenUser] = useState(null);

    function handleClick(user) {
        setIsOpen(true);
        setOpenUser(user);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className='cardList'>
                {users.map((user, id) => {
                    return <Card
                        user={user}
                        key={user.name + id}
                        onClick={() => handleClick(user)} />
                }
                )}
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                appElement={document.querySelector('.app')}
                className="Modal"
                overlayClassName="Overlay"
            >
                <ModalContent user={openUser} closeModal={closeModal} />
            </Modal>

        </>
    )

}



