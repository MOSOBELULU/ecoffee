function Contact() {
    return (
      <div className="flex flex-col items-center p-6 sm:p-12 lg:p-24 bg-gray-100 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">Contact Us</h1>
        
        {/* Contact Form */}
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          
          <button type="submit" className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300">
            Send Message
          </button>
        </form>
  
        {/* Other Contact Info */}
        <div className="w-full max-w-lg mt-10 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Other ways to reach us:</h2>
          
          <p className="text-gray-600">Email: <a href="mailto:example@email.com" className="text-indigo-600 hover:underline">example@email.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">(123) 456-7890</a></p>
          <p className="text-gray-600">Location: 123 Example St., City, Country</p>
  
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mt-6">Follow us:</h3>
            <ul className="flex justify-center space-x-6 mt-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  