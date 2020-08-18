import React from 'react';

import ticket from '../../assets/svg/ticket.svg';
function Header(){
    return (
        <header className="main-header">
            <div className="container">
                <h1 className="mh-logo">
                    <img src={ticket} alt="supervouchers"/>
                    supervouchers.com.br
                </h1>
            </div>

        </header>
    );
}

export default Header;