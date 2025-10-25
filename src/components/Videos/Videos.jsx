import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import VideoCard from '../VideoCard/VideoCard';
import VideoModal from '../VideoModal/VideoModal';
import { videos, categories } from '../../data/videos';
import './Videos.css';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'الكل' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedVideos = filteredVideos.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="videos section" id="videos">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          آخر الفيديوهات
        </motion.h2>

        {/* Search Bar */}
        <motion.div 
          className="videos-search"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="search-box">
            <FaSearch />
            <input 
              type="text" 
              placeholder="ابحث عن فيديو..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div 
          className="videos-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Videos Grid */}
        <div className="videos-grid">
          {displayedVideos.length > 0 ? (
            displayedVideos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video}
                onVideoClick={setSelectedVideo}
              />
            ))
          ) : (
            <div className="no-videos">
              <p>لا توجد فيديوهات متطابقة مع البحث 🔍</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredVideos.length && (
          <motion.div 
            className="load-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="btn btn-primary" onClick={handleLoadMore}>
              تحميل المزيد
            </button>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};

export default Videos;