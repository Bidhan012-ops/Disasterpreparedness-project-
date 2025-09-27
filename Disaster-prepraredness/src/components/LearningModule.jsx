import React from "react";
import styles from "./LearningModule.module.css";

const LearningModule = () => {
  const modules = [
    {
      title: "Disaster Preparedness 101",
      description: "Learn the basics of disaster preparedness and safety measures.",
      videoSrc: "", // Add video URL later
      thumbnail: "https://via.placeholder.com/300x180?text=Module+1",
    },
    {
      title: "First Aid Essentials",
      description: "Step-by-step guide to basic first aid during emergencies.",
      videoSrc: "",
      thumbnail: "https://via.placeholder.com/300x180?text=Module+2",
    },
    {
      title: "Evacuation Planning",
      description: "How to create and follow an evacuation plan for your family.",
      videoSrc: "",
      thumbnail: "https://via.placeholder.com/300x180?text=Module+3",
    },
    {
      title: "Emergency Supplies Checklist",
      description: "Interactive guide to preparing essential emergency supplies.",
      videoSrc: "",
      thumbnail: "https://via.placeholder.com/300x180?text=Module+4",
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>📚 Learning Modules</h1>
        <p>Interactive modules to educate and prepare you for emergencies</p>
      </header>

      <section className={styles.moduleGrid}>
        {modules.map((module, index) => (
          <div key={index} className={styles.moduleCard}>
            <div className={styles.thumbnailWrapper}>
              <img
                src={module.thumbnail}
                alt={module.title}
                className={styles.thumbnail}
              />
              <div className={styles.playOverlay}>▶</div>
            </div>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>Stay informed, stay prepared. Explore all learning modules!</p>
      </footer>
    </div>
  );
};

export default LearningModule;
