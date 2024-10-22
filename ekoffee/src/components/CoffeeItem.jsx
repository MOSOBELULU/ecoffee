/*eslint-disable*/
import classes from './CoffeeItem.module.css';

function CoffeeItem({ image, title, description }) {
    return (
        <li className={classes.coffeeItem}>
            <img src={image} alt={title} className={classes.coffeeImg} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoffeeItem;
