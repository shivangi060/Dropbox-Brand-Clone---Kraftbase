'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-white z-50 shadow-sm"
    >
      <div className="font-bold text-xl">Dropbox Brand</div>
      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Work</li>
        <li className="hover:underline cursor-pointer">Capabilities</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  );
}
