import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // منع السكرول عند فتح القائمة
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
            <h2>مالك يشرح</h2>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* زر الإغلاق داخل القائمة */}
            <li className="close-menu-item">
              <button className="close-menu-btn" onClick={closeMenu}>
                <FaTimes />
              </button>
            </li>

            <li><a onClick={() => scrollToSection('hero')}>الرئيسية</a></li>
            <li><a onClick={() => scrollToSection('about')}>من أنا</a></li>
            <li><a onClick={() => scrollToSection('videos')}>الفيديوهات</a></li>
            <li><a onClick={() => scrollToSection('series')}>السلاسل</a></li>
            <li><a onClick={() => scrollToSection('contact')}>تواصل معي</a></li>
          </ul>
        </div>
      </nav>

      {/* Overlay للإغلاق عند النقر خارج القائمة */}
      {isMobileMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;