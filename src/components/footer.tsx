import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 border-t border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm tracking-wide text-white">COMMUNITY HUB</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-md">
              Connecting residents with local organizations, support services, and community programs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-white mb-4 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-white mb-4 text-sm tracking-wide">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>(555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>hello@hub.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>123 Community St</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-neutral-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-xs text-neutral-600 text-center">
            © 2025 Community Resource Hub. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}