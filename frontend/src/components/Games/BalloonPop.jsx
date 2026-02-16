import React, { useEffect, useRef, useState } from "react";
import "./BalloonPop.css";

const COLORS = ["#60a56b", "#8fd6a6", "#2b9d6f", "#f472b6", "#facc15", "#60a5fa", "#ff7a7a"];
let nextId = 1;

export default function BalloonPop({ duration = 30, onWin }) {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);

  const spawnRef = useRef(null);
  const timerRef = useRef(null);
  const confettiRoot = useRef(null);

  // Start game
  const startGame = () => {
    setBalloons([]);
    setScore(0);
    setTimeLeft(duration);
    setRunning(true);

    spawnRef.current = setInterval(spawnBalloon, 800);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          finishGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const finishGame = () => {
    setRunning(false);
    clearInterval(spawnRef.current);
    clearInterval(timerRef.current);
    launchConfetti(Math.min(80, 20 + score * 2));
    if (onWin) onWin(score);
  };

  // Spawn balloons
  const spawnBalloon = () => {
    const id = nextId++;
    const size = 50 + Math.random() * 50;
    const left = Math.random() * 85;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const floatTime = 4 + Math.random() * 3;

    const balloon = { id, size, left, color, floatTime };
    setBalloons((prev) => [...prev, balloon]);

    setTimeout(() => setBalloons((b) => b.filter((x) => x.id !== id)), floatTime * 1000);
  };

  // Pop balloon
  const popBalloon = (id) => {
    setBalloons((b) => b.filter((x) => x.id !== id));
    setScore((s) => s + 1);
  };

  // Confetti
  const launchConfetti = (count = 40) => {
    const root = confettiRoot.current;
    if (!root) return;
    root.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "bp-confetti";
      el.style.left = `${10 + Math.random() * 80}%`;
      el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      root.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      clearInterval(spawnRef.current);
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="balloon-wrap card">
      <div className="bp-top">
        <div>
          <h2 className="bp-title">Balloon Pop 🎈</h2>
          <div className="bp-sub">Pop the balloons before time runs out!</div>
        </div>

        <div className="bp-controls">
          <div className="bp-stats">
            <div className="bp-stat">
              <div className="bp-label">Score</div>
              <div className="bp-value">{score}</div>
            </div>
            <div className="bp-stat">
              <div className="bp-label">Time</div>
              <div className="bp-value">{timeLeft}s</div>
            </div>
          </div>
          <div className="bp-buttons">
            {!running ? (
              <button className="btn btn-primary" onClick={startGame}>
                Start
              </button>
            ) : (
              <button className="btn btn-ghost" onClick={finishGame}>
                End
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bp-arena">
        {balloons.map((b) => (
          <button
            key={b.id}
            className="bp-balloon"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size * 1.2}px`,
              background: `radial-gradient(circle at 30% 30%, #ffffff50, ${b.color})`,
              animationDuration: `${b.floatTime}s`,
            }}
            onClick={() => popBalloon(b.id)}
          >
            <span className="bp-knot" />
          </button>
        ))}
        <div ref={confettiRoot} className="bp-confetti-root" />
      </div>
    </section>
  );
}
