import React from "react";
import styles from "./AboutWebsite.module.css";

const AboutWebsite = () => {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1>About Our Disaster Preparedness Website</h1>
        <p>Helping you stay safe and prepared for any emergency</p>
      </header>

      {/* Purpose Section */}
      <section className={styles.section}>
        <h2>Our Purpose</h2>
        <p>
          This website is designed to educate and assist people in preparing for
          natural and man-made disasters. We provide interactive tools, checklists,
          emergency contacts, first aid guides, and real-time safety alerts to
          ensure you and your community are always ready.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Interactive emergency supplies and first aid checklists</li>
          <li>Easy access to emergency contact numbers</li>
          <li>Guidelines for first aid and safety measures</li>
          <li>Information about nearby relief shelters</li>
          <li>Printable and mobile-friendly resources</li>
        </ul>
      </section>

      {/* Why Use Section */}
      <section className={styles.section}>
        <h2>Why Use Our Website?</h2>
        <p>
          Disasters can happen at any time. Being prepared saves lives. Our
          website consolidates all the essential resources in one place, making
          it easier for you to plan, respond, and stay safe during emergencies.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Disaster Preparedness Portal | Stay Safe, Stay Ready</p>
      </footer>
    </div>
  );
};

export default AboutWebsite;
