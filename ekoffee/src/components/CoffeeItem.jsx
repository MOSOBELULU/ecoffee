/*eslint-disable*/
function CoffeeItem({ image, title, description }) {
    return (
        < >
        <li className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 max-w-xs">
            <img src={image} alt={title} className="w-64 h-48 object-cover mx-auto" />
            <div className="p-2">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </li>
        </>
    );
}

export default CoffeeItem;
