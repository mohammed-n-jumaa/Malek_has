import { useState, useEffect } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { 
  MdHome, 
  MdPerson, 
  MdVideoLibrary, 
  MdPlaylistPlay, 
  MdEmail 
} from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  const navLinks = [
    { id: 'hero', text: 'الرئيسية', icon: <MdHome /> },
    { id: 'about', text: 'من أنا', icon: <MdPerson /> },
    { id: 'videos', text: 'الفيديوهات', icon: <MdVideoLibrary /> },
    { id: 'series', text: 'السلاسل', icon: <MdPlaylistPlay /> },
    { id: 'contact', text: 'تواصل معي', icon: <MdEmail /> }
  ];

  return (
    <>
      <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => goToSection('hero')}>
            <h1>مالك يشرح</h1>
          </div>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="desktop-nav-btn"
              >
                {link.text}
              </button>
            ))}
          </nav>

          <button 
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>

      <div className={`mobile-sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>القائمة</h2>
          <button 
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            <IoClose />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="sidebar-btn"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <span className="sidebar-icon">{link.icon}</span>
              <span className="sidebar-text">{link.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div 
          className="sidebar-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;