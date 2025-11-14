import React, { useState } from "react";
import "./Rewards.css";
import { FaMedal, FaGift, FaTrophy } from "react-icons/fa";

function Rewards() {
  // For demo, track tasks completed
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const rewards = [
    {
      name: "Gold Star",
      icon: <FaMedal />,
      color: "gold",
      criteria: 10,
      description: "Awarded for completing 10 tasks in a row. Keep up the streak!",
    },
    {
      name: "Surprise Box",
      icon: <FaGift />,
      color: "purple",
      criteria: 5,
      description: "Unlock a random surprise reward after finishing special challenges!",
    },
    {
      name: "Champion Trophy",
      icon: <FaTrophy />,
      color: "blue",
      criteria: 20,
      description: "Earned by completing all weekly tasks with full progress.",
    },
  ];

  const handleCompleteTask = () => {
    setTasksCompleted((prev) => prev + 1);
  };

  const handleRewardClick = (reward) => {
    if (tasksCompleted >= reward.criteria) {
      alert(`🎉 Congratulations! You unlocked "${reward.name}"!`);
    } else {
      alert(`Keep going! Complete ${reward.criteria - tasksCompleted} more task(s) to unlock "${reward.name}".`);
    }
  };

  return (
    <div className="rewards-container">
      <div className="rewards-header">
        <h1 className="rewards-title">🏆 Rewards & Achievements</h1>
        <p className="rewards-subtitle">
          Earn exciting rewards as your child completes daily tasks!
        </p>

        {/* Demo Task Button */}
        <button className="complete-task-btn" onClick={handleCompleteTask}>
          ✅ Complete a Task
        </button>
        <p>Tasks completed: {tasksCompleted}</p>
      </div>

      <div className="rewards-grid">
        {rewards.map((reward, idx) => {
          const unlocked = tasksCompleted >= reward.criteria;
          return (
            <div
              key={idx}
              className={`reward-card ${unlocked ? "unlocked" : "locked"}`}
              onClick={() => handleRewardClick(reward)}
            >
              <div className={`reward-icon ${reward.color}`}>
                {reward.icon}
              </div>
              <h3 className="reward-name">{reward.name}</h3>
              <p className="reward-desc">
                {unlocked
                  ? reward.description
                  : `Complete ${reward.criteria} tasks to unlock this reward!`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rewards;
