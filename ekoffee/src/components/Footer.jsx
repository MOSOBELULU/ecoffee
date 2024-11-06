import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    
                    {/* Logo and Description */}
                    <div className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">Koffee</h2>
                        <p className="mt-2 text-gray-400">
                            Your coffee sanctuary. Crafting each cup with care, we offer a range of delightful flavors and a cozy atmosphere.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0 md:w-1/3 text-center">
                        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/" className="hover:text-gray-100">Home</Link></li>
                            <li><Link to="/menu" className="hover:text-gray-100">Menu</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-100">Contact</Link></li>
                            <li><Link to="/gallery" className="hover:text-gray-100">Gallery</Link></li>
                        </ul>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="md:w-1/3 text-center md:text-right">
                        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                        <div className="mt-4 flex justify-center md:justify-end space-x-6">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Koffee. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
