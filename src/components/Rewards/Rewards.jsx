import React from "react";
import "./Rewards.css";
import { FaMedal, FaGift, FaTrophy } from "react-icons/fa";

function Rewards() {
  return (
    <div className="rewards-container">
      <div className="rewards-header">
        <h1 className="rewards-title">🏆 Rewards & Achievements</h1>
        <p className="rewards-subtitle">
          Earn exciting rewards as your child completes daily tasks!
        </p>
      </div>

      <div className="rewards-grid">
        {/* Reward 1 */}
        <div className="reward-card">
          <FaMedal className="reward-icon gold" />
          <h3 className="reward-name">Gold Star</h3>
          <p className="reward-desc">
            Awarded for completing 10 tasks in a row. Keep up the streak!
          </p>
        </div>

        {/* Reward 2 */}
        <div className="reward-card">
          <FaGift className="reward-icon purple" />
          <h3 className="reward-name">Surprise Box</h3>
          <p className="reward-desc">
            Unlock a random surprise reward after finishing special challenges!
          </p>
        </div>

        {/* Reward 3 */}
        <div className="reward-card">
          <FaTrophy className="reward-icon blue" />
          <h3 className="reward-name">Champion Trophy</h3>
          <p className="reward-desc">
            Earned by completing all weekly tasks with full progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
