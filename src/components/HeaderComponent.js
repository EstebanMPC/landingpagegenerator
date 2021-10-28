import React, { Component } from 'react';
import AboutModal from '../components/AboutComponent';

class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <h1>Hello! My name is Esteban</h1>
                </div>
                <div>
                    <h2 >I am a Shopify Expert based out of Washington DC</h2>
                </div>
                <AboutModal />
            </React.Fragment>
            
        )
    };
};

export default Header; 