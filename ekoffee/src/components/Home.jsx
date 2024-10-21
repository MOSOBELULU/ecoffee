import { useEffect } from "react"
function Home(){
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Error fetching data:', error));
    }, [])
    
    return(
        <>
        
        </>
    )

}
export default Home