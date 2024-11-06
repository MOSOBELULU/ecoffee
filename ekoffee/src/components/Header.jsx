import classes from './Header.module.css';

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.section}>
                <h1>Welcome to Koffee</h1>
                <p>Your coffee sanctuary</p>
                <p>At Koffee, we craft every cup with care, offering a delightful range of flavors from bold and rich to smooth and delicate. Whether you’re starting your day or winding down, we have the perfect blend for you.</p>
                <p>Our cozy atmosphere invites you to relax, connect with friends, or savor a quiet moment. With a welcoming smile and a passion for coffee, Koffee is your go-to spot for a memorable experience.</p>
                <p>Join us today and discover the magic in every sip!</p>
                <button className={classes.btnExplore}>Explore</button>
            </div>
            <img src='/images/navPic.jpg' className={classes.navPic} alt='navPic' />
        </div>
    );
}

export default Header;
