import { motion } from 'framer-motion';
import { FaPlay, FaFilm } from 'react-icons/fa';
import { series } from '../../data/videos';
import './Series.css';

const Series = () => {
  return (
    <section className="series section" id="series">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          السلاسل المتكاملة
        </motion.h2>

        <motion.p 
          className="series-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          استكشف مواضيع متكاملة ومترابطة في سلاسل خاصة
        </motion.p>

        <div className="series-grid">
          {series.map((item, index) => (
            <motion.div 
              key={item.id}
              className="series-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="series-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
                <div className="series-overlay">
                  <button className="series-play-btn">
                    <FaPlay /> مشاهدة السلسلة
                  </button>
                </div>
                <div className="series-badge">
                  <FaFilm /> {item.episodesCount} حلقة
                </div>
              </div>

              <div className="series-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Series;