import React from "react";
import styles from "./emergencycontacts.module.css"

const EmergencyContacts = () => {
  const contacts = [
    { name: "National Disaster Helpline", number: "1078" },
    { name: "Police", number: "100" },
    { name: "Fire & Rescue", number: "101" },
    { name: "Ambulance", number: "102" },
    { name: "Women Helpline", number: "1091" },
    { name: "Child Helpline", number: "1098" },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>📞 Emergency Contact Numbers</h1>
        <p>Reach out immediately during a natural disaster or emergency</p>
      </header>

      <section className={styles.contactSection}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <h3>{contact.name}</h3>
            <p>{contact.number}</p>
            <a href={`tel:${contact.number}`} className={styles.callBtn}>
              Call Now
            </a>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>⚠️ Save these numbers in your phone for quick access.</p>
      </footer>
    </div>
  );
};

export default EmergencyContacts;
