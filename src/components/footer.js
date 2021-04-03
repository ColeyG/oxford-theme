import React from 'react';
import { Link } from 'gatsby';

class Footer extends React.Component {
    render() {
        return (
            <footer className="cl-primary-footer">
                <div className="left">
                    <p>Cole Geerts &copy; 2017 - 2021</p>
                </div>
                <div className="right">
                    <a href="https://github.com/ColeyG" target="_blank" rel="noopener noreferrer" className="cl-a-reverse">github</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
