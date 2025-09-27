import React from "react";
import styles from "./EvacuationPlan.module.css";

const EvacuationPlans= () => {
  const steps = [
    {
      title: "Stay Informed",
      description:
        "Keep track of weather alerts, local news, and official instructions for your area.",
    },
    {
      title: "Prepare Your Go-Bag",
      description:
        "Pack essential items such as water, food, medications, important documents, and emergency tools.",
    },
    {
      title: "Know Your Evacuation Routes",
      description:
        "Identify multiple safe routes from your home to designated shelters or safe zones.",
    },
    {
      title: "Assist Family & Neighbors",
      description:
        "Ensure everyone in your household and nearby community members are aware of the evacuation plan.",
    },
    {
      title: "Follow Official Instructions",
      description:
        "Listen to emergency services and follow the recommended evacuation routes and timing.",
    },
    {
      title: "Stay Safe During Transit",
      description:
        "Avoid flooded areas, unstable structures, and dangerous roads. Travel carefully to the safe zone.",
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>🗺️ Evacuation Plan</h1>
        <p>Follow these steps to evacuate safely during a disaster</p>
      </header>

      <section className={styles.stepsSection}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <h2>
              Step {index + 1}: {step.title}
            </h2>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>
          ⚠️ Remember: Always plan ahead, stay calm, and prioritize safety during
          evacuation.
        </p>
      </footer>
    </div>
  );
};

export default EvacuationPlans;
