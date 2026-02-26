import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif italic tracking-tighter text-nude-600">
          Nail Artistry
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest font-medium transition-colors hover:text-nude-500',
                location.pathname === link.path ? 'text-nude-600' : 'text-zinc-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-nude-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-nude-500 transition-colors shadow-sm"
          >
            Đặt Lịch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-nude-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium',
                    location.pathname === link.path ? 'text-nude-600' : 'text-zinc-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-nude-400 text-white px-6 py-3 rounded-xl text-center font-medium"
              >
                Đặt Lịch Ngay
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-nude-50 border-t border-nude-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif italic text-nude-600">Nail Artistry</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Mang đến vẻ đẹp hoàn mỹ cho đôi bàn tay của bạn với những thiết kế độc bản và dịch vụ tận tâm.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-nude-500 hover:text-nude-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-nude-500 hover:text-nude-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-nude-500 hover:text-nude-600 transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest font-bold text-zinc-800">Liên Kết</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><Link to="/" className="hover:text-nude-500">Trang Chủ</Link></li>
            <li><Link to="/portfolio" className="hover:text-nude-500">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-nude-500">Liên Hệ & Đặt Lịch</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest font-bold text-zinc-800">Giờ Làm Việc</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="flex justify-between"><span>Thứ 2 - Thứ 6:</span> <span>09:00 - 20:00</span></li>
            <li className="flex justify-between"><span>Thứ 7 - CN:</span> <span>10:00 - 18:00</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-nude-200 text-center text-xs text-zinc-400 uppercase tracking-widest">
        © 2026 Nail Artistry Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
