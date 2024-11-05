import classes from './Navigation.module.css'
function Navigation() {

    return (
        <header className={classes.header}>
            <img src='/images/koffee-Logo.png' className={classes.logo} alt='logo' />
            <div className={classes.section}>
                <h1>Welcome to Koffee</h1>
                <br></br>
                <p>Your coffee sanctuary</p>
                <br></br>
                <p>At Koffee, we craft every cup with care, offering a delightful range of flavors from bold and rich to smooth and delicate. Whether you’re starting your day or winding down, we have the perfect blend for you.</p>
                <br></br>
                <p>Our cozy atmosphere invites you to relax, connect with friends, or savor a quiet moment. With a welcoming smile and a passion for coffee, Koffee is your go-to spot for a memorable experience.</p>
                <p>Join us today and discover the magic in every sip!</p>
                <br></br>
                <button className={classes.btnExplore}>Explore</button>
            </div>
            <div className={classes.navWrapper}>
        <nav className={classes.navbar}>
            <ul className={classes.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
        </nav>
        <img src='/images/navPic.jpg' className={classes.navPic} alt='navPic' />
            </div>
        </header>
    )
}
export default Navigation