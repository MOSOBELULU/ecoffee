function Contact() {
    return (
      <div className="flex flex-col items-center p-6 sm:p-12 lg:p-24 bg-amber-50 min-h-screen w-screen">
        <h1 className="text-3xl sm:text-4xl font-semibold text-brown-800 mb-8 text-center w-full">Contact Us</h1>
        
        {/* Contact Form */}
        <form className="w-full bg-white p-20 rounded-lg shadow-md space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-brown-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 w-full"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-brown-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 w-full"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="message" className="text-brown-700 font-medium mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 w-full"
            ></textarea>
          </div>
          
          <button type="submit" className="w-full p-3 bg-brown-700 text-white font-semibold rounded-md hover:bg-brown-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  