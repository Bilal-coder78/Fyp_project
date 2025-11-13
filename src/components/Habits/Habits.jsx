import React, { useState } from "react";
import "./Habits.css";

export default function Habits() {
  const initialHabits = [
    { id: 1, emoji: "💧", title: "Drink Water", desc: "Drink 8 glasses a day.", done: false },
    { id: 2, emoji: "🛏️", title: "Make Bed", desc: "Tidy your bed every morning.", done: false },
    { id: 3, emoji: "📖", title: "Read 15 min", desc: "Read a story or a book daily.", done: false },
    { id: 4, emoji: "🚴", title: "Play Outside", desc: "Play outside for 30 minutes.", done: false },
    { id: 5, emoji: "🧹", title: "Help at Home", desc: "Help with one household task.", done: false },
    { id: 6, emoji: "🙏", title: "Be Kind", desc: "Say thank you & help someone.", done: false },
    { id: 7, emoji: "🍎", title: "Eat a Fruit", desc: "Have one fruit each day.", done: false },
    { id: 8, emoji: "🪥", title: "Brush Teeth", desc: "Brush twice daily, morning & night.", done: false },
  ];

  const [habits, setHabits] = useState(initialHabits);
  const [expanded, setExpanded] = useState({});

  const handleMarkDone = (id) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: true } : h))
    );
  };

  const toggleDetails = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="habits-container">
      <header className="habits-header">
        <div>
          <div className="habits-tag">Build</div>
          <h2 className="habits-title">Daily Habits for Kids</h2>
          <p className="habits-subtitle">
            Pick habits, track progress, and earn rewards — simple, fun, and friendly.
          </p>
        </div>

        <div className="habits-header-actions">
          <button className="btn-gradient">Create New Habit</button>
        </div>
      </header>

      <section className="habits-grid">
        {habits.map((h) => (
          <article key={h.id} className="habit-item">
            <div className="habit-info">
              <div className="habit-emoji">{h.emoji}</div>
              <div>
                <h3 className="habit-name">{h.title}</h3>
                <p className="habit-desc">{h.desc}</p>
              </div>
            </div>

            {expanded[h.id] && (
              <div className="habit-details">
                <p>
                  This habit helps build a healthy routine. Keep doing it every
                  day to grow discipline and self-care!
                </p>
              </div>
            )}

            <div className="habit-actions">
              <button
                className="btn-outline small"
                onClick={() => toggleDetails(h.id)}
              >
                {expanded[h.id] ? "Hide Details" : "Details"}
              </button>

              <button
                className="btn-gradient small"
                onClick={() => handleMarkDone(h.id)}
                disabled={h.done}
              >
                {h.done ? "✅ Completed" : "Mark Done"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
