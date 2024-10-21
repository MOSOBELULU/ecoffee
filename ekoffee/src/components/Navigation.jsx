import classes from './Navigation.module.css'
function Navigation() {

    return (
        <>
        <nav>
            <img src='/images/koffee-Logo.png' className={classes.Logo} alt='logo' />
        </nav>
        <img src='/images/navPic.jpg' className={classes.navPic} alt='navPic' />
        </>
    )
}
export default Navigation