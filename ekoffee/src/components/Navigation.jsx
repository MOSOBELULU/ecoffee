import classes from './Navigation.module.css'
function Navigation() {

    return (
        <header className={classes.header}>
            <img src='/images/koffee-Logo.png' className={classes.logo} alt='logo' />
            <div className={classes.navWrapper}>
        <nav className={classes.navbar}>
            <ul className={classes.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shop/Cart</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
        </nav>
        <img src='/images/navPic.jpg' className={classes.navPic} alt='navPic' />
            </div>
        </header>
    )
}
export default Navigation