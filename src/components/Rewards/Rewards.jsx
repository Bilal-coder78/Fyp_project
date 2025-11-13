import React, { useState } from "react";
import "./Rewards.css";

function Rewards() {
  const [points, setPoints] = useState(120); // Example user points
  const [claimed, setClaimed] = useState([]);

  const rewards = [
    { id: 1, title: "Healthy Breakfast Badge", cost: 50 },
    { id: 2, title: "Focus Streak Trophy", cost: 100 },
    { id: 3, title: "Eco Warrior Badge", cost: 150 },
    { id: 4, title: "Consistency Crown", cost: 200 },
  ];

  const claimReward = (reward) => {
    if (points >= reward.cost) {
      setPoints(points - reward.cost);
      setClaimed([...claimed, reward.id]);
      alert(`🎉 You claimed "${reward.title}"!`);
    } else {
      alert("Not enough points to claim this reward 😅");
    }
  };

  return (
    <div className="rewards-container">
      <h1 className="rewards-title">🌿 Your Rewards</h1>
      <p className="rewards-points">Total Points: <strong>{points}</strong></p>

      <div className="rewards-grid">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`reward-card ${claimed.includes(reward.id) ? "claimed" : ""}`}
          >
            <h3>{reward.title}</h3>
            <p>Cost: {reward.cost} pts</p>
            {claimed.includes(reward.id) ? (
              <button className="claimed-btn" disabled>✅ Claimed</button>
            ) : (
              <button onClick={() => claimReward(reward)} className="claim-btn">
                Claim Reward
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rewards;
