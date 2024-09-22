import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Mohammad Rammal. All rights reserved.</p>
            <p>
                Contact me at: <a href="mailto:mohammad.rammal@hotmail.com">mohammad.rammal@hotmail.com</a>
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    },
};

export default Footer;
