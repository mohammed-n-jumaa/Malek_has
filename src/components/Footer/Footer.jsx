import { FaYoutube, FaInstagram, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h2>مالك يشرح</h2>
            <p>اكتشف قصصًا ومعارف تُروى بطريقة مختلفة</p>
            <div className="footer-social">
              <a href="https://www.youtube.com/@maliikhass" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/malik.hass1/?igsh=d2piM2lwaDMxdXd4&utm_source=qr#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/malekyasrah" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul className="footer-links">
              <li><a href="#hero">الرئيسية</a></li>
              <li><a href="#about">من أنا</a></li>
              <li><a href="#videos">الفيديوهات</a></li>
              <li><a href="#series">السلاسل</a></li>
              <li><a href="#contact">تواصل معي</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>التصنيفات</h3>
            <ul className="footer-links">
              <li><a href="#videos">تاريخ</a></li>
              <li><a href="#videos">علوم</a></li>
              <li><a href="#videos">ثقافة</a></li>
              <li><a href="#videos">سياسة</a></li>
              <li><a href="#videos">تكنولوجيا</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section footer-newsletter">
            <h3>📧 النشرة البريدية</h3>
            <p>اشترك ليصلك كل جديد</p>
            <div className="newsletter-form">
              <input type="email" placeholder="بريدك الإلكتروني" />
              <button>اشترك</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            صُنع بـ <FaHeart className="heart-icon" /> © {currentYear} مالك يشرح - جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;