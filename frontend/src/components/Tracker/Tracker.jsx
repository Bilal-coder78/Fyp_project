import React, { useState, useEffect } from "react";
import "./Tracker.css";

export default function Tracker() {
  const initialDays = [
    { id: 1, day: "Mon", done: false },
    { id: 2, day: "Tue", done: false },
    { id: 3, day: "Wed", done: false },
    { id: 4, day: "Thu", done: false },
    { id: 5, day: "Fri", done: false },
    { id: 6, day: "Sat", done: false },
    { id: 7, day: "Sun", done: false },
  ];

  // Load from localStorage or default
  const [days, setDays] = useState(() => {
    const saved = localStorage.getItem("habitDays");
    return saved ? JSON.parse(saved) : initialDays;
  });

  // Save to localStorage whenever days change
  useEffect(() => {
    localStorage.setItem("habitDays", JSON.stringify(days));
  }, [days]);

  const toggleDay = (id) => {
    setDays((prev) =>
      prev.map((d) => (d.id === id ? { ...d, done: !d.done } : d))
    );
  };

  const progress = Math.round(
    (days.filter((d) => d.done).length / days.length) * 100
  );

  const resetWeek = () => {
    const resetDays = days.map((d) => ({ ...d, done: false }));
    setDays(resetDays);
    localStorage.setItem("habitDays", JSON.stringify(resetDays));
  };

  return (
    <div className="tracker-page container-fluid">
      <header className="tracker-header">
        <h2>Weekly Habit Tracker</h2>
        <p className="text-muted">
          Track your daily progress and build consistent habits.
        </p>
      </header>

      <section className="tracker-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-label">{progress}% Completed</div>
      </section>

      <section className="days-grid">
        {days.map((d) => (
          <div
            key={d.id}
            className={`day-card ${d.done ? "done" : ""}`}
            onClick={() => toggleDay(d.id)}
          >
            <div className="day-name">{d.day}</div>
            <div className="day-status">{d.done ? "✅" : "⏺️"}</div>
          </div>
        ))}
      </section>

      <section className="tracker-footer">
        <button className="btn-reset" onClick={resetWeek}>
          🔄 Reset Week
        </button>
      </section>
    </div>
  );
}
