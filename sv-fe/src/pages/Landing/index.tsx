import React from 'react';

import logo from '../../assets/logo.png';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Super Vouchers" />
                    <h2>Movimente a economia em todos os momentos.</h2>
                </div>
            </div>
        </div>
    );
}

export default Landing;