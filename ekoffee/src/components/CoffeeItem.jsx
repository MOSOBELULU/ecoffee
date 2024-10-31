/*eslint-disable*/
function CoffeeItem({ image, title, description }) {
    return (
      <ul >
        <li className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </li>
      </ul>
    );
  }
  
  export default CoffeeItem;
  