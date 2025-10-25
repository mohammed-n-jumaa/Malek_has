import { motion } from 'framer-motion';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  // روابط الصور من الإنترنت
  const heroBg = 'https://i.postimg.cc/15fbj97G/hero-bg.jpg';

  const scrollToVideos = () => {
    document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* خلفية الصورة */}
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            مالك يشرح
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            اكتشف قصصًا ومعارف تُروى بطريقة مختلفة
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat-item">
              <h3>150+</h3>
              <p>فيديو</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>مشترك</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>ساعة محتوى</p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={scrollToVideos}>
              <FaPlay /> مشاهدة أحدث الحلقات
            </button>
            <a 
              href="https://www.youtube.com/@maliikhass" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaYoutube /> قناتي على يوتيوب
            </a>
          </motion.div>
        </motion.div>

        {/* تصميم الكتب المحسّن */}
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="books-container">
            {/* الكتاب الأول */}
            <motion.div 
              className="book book-1"
              initial={{ opacity: 0, x: -50, rotate: -15 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              <div className="book-cover">
                <div className="book-content">
                  <h3>تاريخ</h3>
                  <div className="book-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="book-spine"></div>
            </motion.div>

            {/* الكتاب الثاني */}
            <motion.div 
              className="book book-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="book-cover">
                <div className="book-content">
                  <h3>علوم</h3>
                  <div className="book-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="book-spine"></div>
            </motion.div>

            {/* الكتاب الثالث */}
            <motion.div 
              className="book book-3"
              initial={{ opacity: 0, x: 50, rotate: 15 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="book-cover">
                <div className="book-content">
                  <h3>ثقافة</h3>
                  <div className="book-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="book-spine"></div>
            </motion.div>

            {/* جزيئات متطايرة */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${40 + (i % 3) * 10}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;