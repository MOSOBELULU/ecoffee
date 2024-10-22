/*eslint-disable*/
//helper function 
export const fetchCoffeeData = async () => {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch coffee data');
    }
};
