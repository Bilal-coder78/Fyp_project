import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

const LOTTIE_PLANT = "https://assets2.lottiefiles.com/packages/lf20_tfb3estd.json"; // plant-growing Lottie

function Home() {
  const phrases = ["Build Habits", "Be Kind", "Eat Healthy", "Read Daily", "Grow Together"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [challenge, setChallenge] = useState("");   // store today's challenge
  const [completed, setCompleted] = useState(false); // store if user completed it
  const typingRef = useRef(null);

  const FUN_TEXTS = [
    "Drinking water helps your brain stay sharp 🌊",
    "A small act of kindness brightens the day 💛",
    "Plants grow with care — and so do habits 🌿",
    "Read 10 minutes a day to unlock your imagination 📖",
    "Celebrate tiny wins — they add up to big changes 🎉",
  ];
  const [funIndex, setFunIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Inject Lottie player from CDN once
  useEffect(() => {
    const existing = document.querySelector('script[data-lottie-player]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
      s.async = true;
      s.setAttribute("data-lottie-player", "true");
      document.body.appendChild(s);
    }
  }, []);

  // Rotate hero phrase every 3.5s
  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((p) => (p + 1) % phrases.length);
      setTyped("");
      setCharIdx(0);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Type effect
  useEffect(() => {
    if (charIdx <= phrases[phraseIndex].length) {
      typingRef.current = setTimeout(() => {
        setTyped(phrases[phraseIndex].slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
      }, 36);
    }
    return () => clearTimeout(typingRef.current);
  }, [charIdx, phraseIndex, phrases]);

  // Rotate fun tips
  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setFunIndex((i) => (i + 1) % FUN_TEXTS.length);
        setFade(true);
      }, 380);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/v2/challenges/today", {
      credentials: "include", // important to include cookies for auth
    })
      .then(res => res.json())
      .then(data => {
        setChallenge(data.data.challenge);
      })
      .catch(err => console.error("Failed to fetch challenge:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/v2/challenges/status", {
      credentials: "include", // important to include cookies for auth
    })
      .then(res => res.json())
      .then(data => setCompleted(data.data.completed))
      .catch(err => console.error("Failed to fetch challenge status:", err));
  }, []);

  const features = [
    { id: 1, title: "Gentle Reminders", desc: "Friendly prompts for daily consistency", emoji: "⏰" },
    { id: 2, title: "Rewards & Stickers", desc: "Collect fun stickers for small wins", emoji: "🏅" },
    { id: 3, title: "Team Challenges", desc: "Classroom-friendly kindness activities", emoji: "🌱" },
    { id: 4, title: "Parent Tools", desc: "Simple controls for adults", emoji: "👩‍🏫" },
  ];

  return (
    <div className="home-container" id="app">
      <main>
        <section className="main-left">
          <div className="hero-upgrade card hero-animated">
            <div className="hero-left-area">
              <h1 className="hero-heading animated-heading">
                Welcome to <span className="gradient-text">GrowHabits 🌱</span>
              </h1>

              <div className="hero-sub-wrap">
                <p className="hero-sub lead">Helping kids build healthy routines with fun, kindness, and learning.</p>

                <div className="phrase-row">
                  <div className="phrase-chip">✨</div>
                  <div className="phrase-text" aria-live="polite">
                    <strong className="phrase-typed">{typed}</strong>
                    <span className="typing-cursor">|</span>
                  </div>
                </div>

                <div className="floating-icons" aria-hidden>
                  <span className="float-icon i1">🍎</span>
                  <span className="float-icon i2">📚</span>
                  <span className="float-icon i3">💧</span>
                  <span className="float-icon i4">🪴</span>
                  <span className="float-icon i5">✨</span>
                </div>
              </div>

              <div className="hero-ctas">
                <button className="btn btn-primary cta-start" onClick={() => (window.location.href = "/habits")}>Start My Habit Journey</button>
                <button className="btn btn-ghost cta-learn" onClick={() => (window.location.href = "/parents")}>Learn for Parents</button>
              </div>

              <div className="hero-mini-stats hstack">
                <div className="mini-card">
                  <div className="mini-title">For Ages</div>
                  <div className="mini-value">4–10 yrs</div>
                </div>
                <div className="mini-card">
                  <div className="mini-title">Mode</div>
                  <div className="mini-value">Kids • Classrooms</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-features">
            <div className="snapshot-header">
              <div>
                <div className="snapshot-title">Why kids love GrowHabits</div>
                <div className="small">Simple tasks, fun rewards, and gentle encouragement.</div>
              </div>
              <div className="small">Nature & Calm</div>
            </div>

            <div className="snapshot-body features-grid">
              {features.map((f) => (
                <article key={f.id} className="feature-card" tabIndex="0">
                  <div className="feature-emoji">{f.emoji}</div>
                  <div className="feature-content">
                    <div className="feature-title">{f.title}</div>
                    <div className="small">{f.desc}</div>
                    {/* <div className="feature-actions">
                      <button className="btn btn-primary btn-sm" onClick={() => alert(`${f.title} — Try soon!`)}>Try</button>
                      <button className="btn btn-ghost btn-sm" onClick={() => alert(`${f.title} — Learn more`)}>Learn</button>
                    </div> */}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="card card-about">
            <div className="about-grid">
              <div>
                <div className="snapshot-title">About GrowHabits</div>
                <p className="small">We help children build routine with play, kind prompts, and positive reinforcement — great for families and classrooms.</p>
                <ul className="about-list">
                  <li>Short daily tasks for young kids</li>
                  <li>Parent & school-friendly controls</li>
                  <li>Privacy-first & simple tracking</li>
                </ul>
                <div className="about-ctas">
                  <button className="btn btn-primary" onClick={() => alert("Sticker claimed!")}>Claim a Sticker</button>
                  <button className="btn btn-ghost" onClick={() => (window.location.href = "/signup")}>Sign up a child</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="sidebar right-visual-col">
          <div className="card lottie-card">
            <div className="lottie-wrap">
              <lottie-player
                src={LOTTIE_PLANT}
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "100%", height: "300px", borderRadius: 12 }}
              ></lottie-player>
            </div>

            <div className={`fun-card ${fade ? "fade-in" : "fade-out"}`}>
              <div className="fun-title">Today's Tip</div>
              <div className="fun-text">{FUN_TEXTS[funIndex]}</div>
              <div className="fun-actions">
                {/* <button className="btn btn-primary btn-sm" onClick={() => alert("Nice! Try it today.")}>Try it</button> */}
                <button className="btn btn-primary btn-sm" onClick={() => setFunIndex((i) => (i + 1) % FUN_TEXTS.length)}>Next</button>
              </div>
            </div>
          </div>

          <div className="card sidebar-card">
            <div className="sidebar-links-title">Quick Links</div>
            <div className="sidebar-links">
              <a onClick={() => (window.location.href = "/login")} className="btn btn-ghost">Login</a>
              <a onClick={() => (window.location.href = "/signup")} className="btn btn-ghost">Sign up a child</a>
            </div>
          </div>

          <div className="card sidebar-card">
            <div className="sidebar-stickers-title">Stickers</div>
            <div className="small">Earn stickers when daily tasks are completed.</div>
            {/* <div className="sidebar-stickers">
              <div className="sticker" title="Watered plants">💧</div>
              <div className="sticker" title="Shared lunch">🍎</div>
              <div className="sticker" title="Read book">📖</div>
            </div> */}
          </div>
          <div className="card sidebar-card quiz-card">
            <div className="quiz-title">🌞 Daily Challenge</div>
            <div className="quiz-question">{challenge || "Loading challenge..."}</div>
            <div className="quiz-actions">
              <button
                className="btn btn-primary btn-sm"
                disabled={completed} // disable if completed or not logged in
                onClick={async () => {
                  try {
                    const res = await fetch("http://localhost:8000/api/v2/challenges/complete", {
                      method: "POST",
                      credentials: "include", // important to include cookies for auth
                    });

                    if (res.ok) {
                      setCompleted(true);
                      alert("Awesome! 🌟 Challenge completed!");
                    } else {
                      alert("Failed to complete challenge");
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Something went wrong");
                  }
                }}
              >
                {completed ? "✅ Completed" : "✅ Yes I Did!"}
              </button>
              {/* <button
                className="btn btn-ghost btn-sm"
                onClick={() => alert("Try again tomorrow! 💪")}
              >
                🔁 Try Again
              </button> */}
            </div>
            <div className="quiz-footer">New challenge every day</div>
          </div>
        </aside>
      </main>

      <footer>
        <div>© GrowHabits • Designed for kids</div>
        <div>About · Parents · Teachers · Privacy</div>
      </footer>
    </div>
  );
}

export default Home;
