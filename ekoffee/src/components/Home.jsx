import { useEffect, useState } from "react"
import classes from './Home.module.css'
function Home(){
    const [data, setData] = useState([])
    const getData = async () => {
        try {
          const resp = await fetch('https://api.sampleapis.com/coffee/hot');
          const json = await resp.json();
          setData(json);
        } catch (err) {
            setData([]);
          setData(err.message);
        }
      }
      useEffect(() => {
        getData();
      }, []);
    return(
        <>
         <>
            <h1>Hot Coffee Menu</h1>
            <ul>
                {data.length > 0 ? (
                    data.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt='coffeeImg' className={classes.coffeeImg} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))
                ) : (
                    <p>Loading or no data available</p>
                )}
            </ul>
        </>
        </>
    )

}
export default Home