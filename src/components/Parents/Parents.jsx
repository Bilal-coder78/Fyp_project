import React from "react";
import "./Parents.css";

function Parents() {
  return (
    <div className="parents-container">

      <header className="parents-header">
        <h1 className="parents-title">Guidance for Parents</h1>
        <p className="parents-sub">
          Support your child’s growth with simple routines, positive parenting,
          and healthy emotional habits.
        </p>
      </header>

      <section className="parents-section card">
        <h2>💚 Why GrowHabits Works for Kids</h2>
        <ul className="parents-list">
          <li>Short tasks turn routines into fun activities</li>
          <li>Rewards build confidence and motivation</li>
          <li>Visual progress helps kids understand their achievements</li>
          <li>Kind reminders develop responsibility and empathy</li>
        </ul>
      </section>

      <section className="parents-section card">
        <h2>🧠 Tips for Parents</h2>
        <p className="parents-tip-text">
          Use these small strategies to help children build strong habits:
        </p>
        <ul className="parents-list">
          <li><strong>Be consistent:</strong> Kids learn best with routine.</li>
          <li><strong>Celebrate small wins:</strong> A sticker or a smile goes far.</li>
          <li><strong>Stay patient:</strong> Habits grow slowly, like plants.</li>
          <li><strong>Participate:</strong> Show them that habits matter for adults too.</li>
          <li><strong>Model behavior:</strong> Kids repeat what they see, not what they hear.</li>
        </ul>
      </section>

      <section className="parents-section card">
        <h2>📘 Recommended Daily Habits</h2>
        <ul className="parents-list">
          <li>Read for 10 minutes daily</li>
          <li>Drink 5–8 glasses of water</li>
          <li>Do a simple kindness task</li>
          <li>Practice one household responsibility</li>
          <li>Spend 10 minutes outdoors</li>
        </ul>
      </section>

      <section className="parents-section card">
        <h2>🌱 Parent–Child Activities</h2>
        <ul className="parents-list">
          <li>Plant a small plant and track its growth</li>
          <li>Evening reflection: “What made you smile today?”</li>
          <li>Make a kindness jar for weekly good deeds</li>
          <li>Read a bedtime story together</li>
        </ul>
      </section>

      <footer className="parents-footer">
        © GrowHabits — Helping Parents Build Strong Foundations
      </footer>
    </div>
  );
}

export default Parents;
