/*eslint-disable*/
import { useEffect, useState } from "react"
import { fetchCoffeeData } from "../CoffeeApi"
import CoffeeItem from "./CoffeeItem"
import classes from './Home.module.css'


function Home(){
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
             setData(err.message);
             setLoading(false)
           }
         }
         getData()
   }, []) 
     
       


    return(
         <>
            <div className={classes.container} >
            <h1>Hot Coffee Menu</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {!loading && !error && data.length > 0 ? (
                    data.map((item) => (
                        <CoffeeItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                ) : (
                    !loading && <p>No data available</p>
                )}
            </ul>
        </div>
        </>
    
    )

}
export default Home