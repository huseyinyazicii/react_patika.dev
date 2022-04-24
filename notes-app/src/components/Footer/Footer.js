import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <span className={styles.description}>developed by</span>
            <span className={styles.name}>hüseyin yazıcı</span>
            <a href='/https://github.com/huseyinyazicii' target="_blank" className={styles.icon}>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href='/https://www.linkedin.com/in/h%C3%BCseyin-yaz%C4%B1c%C4%B1-14b803201' target="_blank" className={styles.icon}>
                <FontAwesomeIcon icon={faLinkedin}  />
            </a>
            <a href='/https://www.instagram.com/huseyinyazc/' target="_blank" className={styles.icon}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </footer>
    );
}

export default Footer;