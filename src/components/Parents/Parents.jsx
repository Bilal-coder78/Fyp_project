import React from "react";
import "./Parents.css";

function Parents() {
  return (
    <div className="parent-container">

      <header className="parent-header">
        <h1 className="parent-title">Guidance for Parents</h1>
        <p className="parent-subtitle">
          Support your child’s growth with simple routines, positive parenting,
          and healthy emotional habits.
        </p>
      </header>

      <section className="parent-section parent-card">
        <h2 className="parent-section-title">💚 Why GrowHabits Works for Kids</h2>
        <ul className="parent-list">
          <li>Short tasks turn routines into fun activities</li>
          <li>Rewards build confidence and motivation</li>
          <li>Visual progress helps kids understand achievements</li>
          <li>Kind reminders develop empathy & responsibility</li>
        </ul>
      </section>

      <section className="parent-section parent-card">
        <h2 className="parent-section-title">🧠 Tips for Parents</h2>
        <p className="parent-text">
          Use these small strategies to help children build strong habits:
        </p>
        <ul className="parent-list">
          <li><strong>Be consistent:</strong> Kids learn best with routine.</li>
          <li><strong>Celebrate small wins:</strong> Stickers go far.</li>
          <li><strong>Stay patient:</strong> Habits grow slowly.</li>
          <li><strong>Participate:</strong> Show habits matter for adults too.</li>
          <li><strong>Model behavior:</strong> Kids repeat what they see.</li>
        </ul>
      </section>

      <section className="parent-section parent-card">
        <h2 className="parent-section-title">📘 Recommended Daily Habits</h2>
        <ul className="parent-list">
          <li>Read for 10 minutes</li>
          <li>Drink 5–8 glasses of water</li>
          <li>Do one kindness task</li>
          <li>Help in one household task</li>
          <li>Spend 10 minutes outdoors</li>
        </ul>
      </section>

      <section className="parent-section parent-card">
        <h2 className="parent-section-title">🌱 Parent–Child Activities</h2>
        <ul className="parent-list">
          <li>Plant a seed together & track growth</li>
          <li>Ask daily: “What made you smile today?”</li>
          <li>Create a kindness jar</li>
          <li>Read a bedtime story</li>
        </ul>
      </section>

      <footer className="parent-footer">
        © GrowHabits — Helping Parents Build Strong Foundations
      </footer>

    </div>
  );
}

export default Parents;
