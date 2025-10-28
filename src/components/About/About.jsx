import { motion } from 'framer-motion';
import { FaBookOpen, FaVideo, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  // رابط صورة البروفايل من الإنترنت
  const profileImg = 'https://i.postimg.cc/T1Z0SXpw/profile.jpg';

  const features = [
    {
      icon: <FaBookOpen />,
      title: "محتوى معرفي",
      description: "شرح تاريخي وعلمي بأسلوب سردي مشوق"
    },
    {
      icon: <FaVideo />,
      title: "إنتاج عالي الجودة",
      description: "فيديوهات مصممة بعناية واحترافية"
    },
    {
      icon: <FaUsers />,
      title: "مجتمع متفاعل",
      description: "أكثر من  3k متابع نشط"
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          من أنا؟
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img src={profileImg} alt="مالك" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>مرحباً، أنا مالك</h3>
            <p className="about-description">
              أنا صانع محتوى متخصص في تقديم المعرفة التاريخية والعلمية بطريقة مبسطة وممتعة. 
              هدفي هو جعل المعلومات المعقدة سهلة الفهم للجميع، من خلال أسلوب سردي جذاب 
              يجمع بين الدقة العلمية والإبداع في العرض.
            </p>
            <p className="about-description">
              أؤمن بأن المعرفة حق للجميع، وأن كل قصة تاريخية أو حقيقة علمية يمكن أن تُروى 
              بطريقة تجذب الانتباه وتترك أثراً. انضم إلي في هذه الرحلة المعرفية!
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;