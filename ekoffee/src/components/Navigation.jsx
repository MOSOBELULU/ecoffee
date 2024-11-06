import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <div className={classes.navWrapper}>
            <nav className={classes.navbar}>
            <img src='/images/koffee-Logo.png' className={classes.logo} alt='logo' />
                <ul className={classes.navLinks}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
