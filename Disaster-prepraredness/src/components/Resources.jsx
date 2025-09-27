import React, { useState, useEffect } from "react";
import PreparednessScore from "./pre";
import styles from "./resources.module.css";
import { useDispatch } from "react-redux";
import { scoreaction } from "./Store/Index";

const Checklist = () => {
  const dispatch = useDispatch();

  const sections = [
    {
      title: "Home Emergency Supplies",
      items: [
        "Drinking water (1 gallon per person per day for 3 days)",
        "Non-perishable food (3-day supply)",
        "Battery-powered or hand-crank radio",
        "Flashlights with extra batteries",
        "First aid kit",
        "Medications and prescriptions",
        "Multi-purpose tool / Swiss knife",
        "Sanitation and hygiene items",
        "Extra clothing and blankets",
        "Important documents (ID, insurance, medical records)"
      ]
    },
    {
      title: "Go-Bag / Evacuation Supplies",
      items: [
        "Portable charger / power bank",
        "Cash and coins",
        "Emergency contact list",
        "Map of the area",
        "Lightweight tent / sleeping bag",
        "Food bars / snacks",
        "Face masks and gloves",
        "Whistle or signaling device"
      ]
    },
    {
      title: "Vehicle Emergency Kit",
      items: [
        "Spare tire, jack, and tools",
        "Jumper cables",
        "Reflective warning triangles",
        "Flashlight with extra batteries",
        "First aid kit (vehicle)",
        "Water and non-perishable snacks",
        "Blanket and warm clothing",
        "Basic tool kit"
      ]
    },
    {
      title: "First Aid Supplies",
      items: [
        "Adhesive bandages (various sizes)",
        "Sterile gauze pads and tape",
        "Antiseptic wipes and ointment",
        "Tweezers and scissors",
        "Disposable gloves",
        "Thermometer",
        "Pain relievers",
        "Burn cream / cold pack",
        "CPR mask or face shield",
        "Emergency medical instructions / manual"
      ]
    }
  ];

  // Flatten all items for easier management
  const allItems = sections.flatMap(section => section.items);

  const [checkedItems, setCheckedItems] = useState(
    Array(allItems.length).fill(false)
  );

  // Load saved state
  useEffect(() => {
    const saved = allItems.map(
      (_, index) => localStorage.getItem(`checkbox-${index}`) === "true"
    );
    setCheckedItems(saved);
  }, [allItems.length]);

  // Calculate score dynamically
  const score = Math.round(
    (checkedItems.filter(Boolean).length / allItems.length) * 100
  );

  // Update Redux whenever checkedItems changes
  useEffect(() => {
    dispatch(scoreaction.setscore(score));
  }, [checkedItems, score, dispatch]);

  const handleCheck = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
    localStorage.setItem(`checkbox-${index}`, updated[index]);
  };

  const resetChecklist = () => {
    const cleared = Array(allItems.length).fill(false);
    setCheckedItems(cleared);
    allItems.forEach((_, index) => localStorage.removeItem(`checkbox-${index}`));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Emergency Supplies & First Aid Checklist 📦</h1>
      </header>

      {/* Preparedness Score */}
      {/* <PreparednessScore /> */}

      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <button className={styles.resetBtn} onClick={resetChecklist}>
            ❌ Reset Checklist
          </button>
        </div>

        <section className={styles.checklistSection}>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.checklistCard}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, index) => {
                  const globalIndex = sections
                    .slice(0, sectionIndex)
                    .flatMap(s => s.items).length + index;

                  return (
                    <li key={globalIndex}>
                      <input
                        type="checkbox"
                        checked={checkedItems[globalIndex]}
                        onChange={() => handleCheck(globalIndex)}
                      />{" "}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Checklist;
