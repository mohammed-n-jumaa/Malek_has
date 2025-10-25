import { motion } from 'framer-motion';
import { FaPlay, FaEye, FaClock } from 'react-icons/fa';
import './VideoCard.css';

const VideoCard = ({ video, onVideoClick }) => {
  return (
    <motion.div 
      className="video-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={() => onVideoClick(video)}
    >
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="video-overlay">
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
        <span className="video-duration">{video.duration}</span>
        <span className="video-category">{video.category}</span>
      </div>

      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-meta">
          <span className="video-views">
            <FaEye /> {video.views} مشاهدة
          </span>
          <span className="video-date">
            <FaClock /> {video.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;