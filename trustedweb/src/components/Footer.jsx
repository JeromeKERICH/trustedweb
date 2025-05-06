import { Mail, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-[4%] md:px-[10%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand + Mission */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Trusted Dev</h3>
          <p className="text-sm text-gray-400">
            Educating, protecting & empowering you before you build your website.  
            Build smarter. Avoid scams. Launch with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link to="/library" className="hover:text-teal-400">Library</Link></li>
            <li><Link to="/tools" className="hover:text-teal-400">Interactive Tools</Link></li>
            <li><Link to="/services" className="hover:text-teal-400">Services</Link></li>
            <li><Link to="/subscribe" className="hover:text-teal-400">Updates</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              <a href="mailto:kerich@trustedweb.com" className="hover:text-teal-400">kerich@trustedweb.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <a href="tel:+254729353537" className="hover:text-teal-400">+254 729 353 537</a>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <a href="#" className="hover:text-teal-400">Terms & Privacy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter/WhatsApp Reminder */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">
            Get scam alerts, clarity tips & success stories directly.
          </p>
          <a
            href="https://wa.me/your-number?text=I'm%20interested%20in%20the%20Web%20Clarity%20List!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Join WhatsApp List
          </a>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Trusted Dev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;