import { useEffect, useState } from "react";
import { fetchCoffeeData } from "../CoffeeApi";
import CoffeeItem from "./CoffeeItem";
import classes from './Home.module.css';

function Home() {
    //set states
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);      

    //fetch data
    useEffect(() => {
        const getData = async () => {
            try {
                const coffeeData = await fetchCoffeeData();
                setData(coffeeData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className={classes.container}>
            <h1>Hot Coffee Menu</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {!loading && !error && data.length > 0 ? (
                    data.map((item) => (
                        <li key={item.id}>
                            <CoffeeItem
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </li>
                    ))
                ) : (
                    !loading && <p>No data available</p>
                )}
            </ul>
        </div>
    );
}

export default Home;
