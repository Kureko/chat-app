import React from 'react';
import './Contact.css';
import Contact from './Contact.js';

    const tab = [
        {
            name : "Arnold Riley",
            avatar: "https://randomuser.me/api/portraits/men/24.jpg",
            online: "status"
        },
        {
            name : "Donald Rhodes",
            avatar: "https://randomuser.me/api/portraits/men/83.jpg",
            offline: "status"
        },
        {
            name : "Sylvia Jordan",
            avatar: "https://randomuser.me/api/portraits/women/31.jpg",
            online: "status"
        },
        {
            name : "Ivan Lawson",
            avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            online: "status"
        },
        {
            name : "Bonnie Gregory",
            avatar: "https://randomuser.me/api/portraits/women/70.jpg",
            offline: "status"
        }
    ];  

const ContactList = () => (
    <div>
      {tab.map(item => (
        <Contact name={item.name} avatar={item.avatar} online={item.online} />
      ))}
    </div>
);

export default ContactList;