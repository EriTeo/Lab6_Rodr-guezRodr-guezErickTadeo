import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__brand}>
                        <Link href="#home" className={styles.footer__logo}>
                            <span className={styles.logo__bracket}>&lt;</span>
                            Erick Rodríguez
                            <span className={styles.logo__bracket}>/&gt;</span>
                        </Link>
                        <p className={styles.footer__text}>
                            Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                        </p>
                    </div>
                    
                    <div className={styles.footer__social}>
                        <a 
                            href="https://www.linkedin.com/in/erick-rodríguez-b113613b2/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles["footer__social-link"]} 
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a 
                            href="https://github.com/EriTeo" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles["footer__social-link"]} 
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>

                        <a 
                            href="mailto:eriteo.rod@gmail.com" 
                            className={styles["footer__social-link"]} 
                            aria-label="Email"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        &copy; 2026 Erick Tadeo Rodríguez Rodríguez. Todos los derechos reservados.
                    </p>
                    <p className={styles.footer__made}>
                        Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
}