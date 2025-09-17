import React, { useState, useRef, useEffect } from "react";
import "./WeddingCard.css";

const WeddingCard = ({ groom = "Naveed Ahmad", father = "Bashair Ahmad" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRibbon, setShowRibbon] = useState(false);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const openCard = () => {
    // show ribbon animation then open
    setShowRibbon(true);
    setTimeout(() => {
      setShowRibbon(false);
      setIsOpen(true);
    }, 1200); // match ribbon animation length in CSS
  };

  // auto-play audio when card opens (best-effort; may be blocked on some mobile browsers)
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (isOpen) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      a.currentTime = 0;
      setPlaying(false);
    }
  }, [isOpen]);

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };
  return (
    <div className="wedding-card-viewport">
      {/* Audio placeholder - put your mp3 in public/ and name it wedding-song.mp3 */}
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}Song.mp3`} loop />
      {/* small decorative florals (corner decorations) */}
      <div className="floral top-left">🌸</div>
      <div className="floral top-right">🌺</div>
      <div className="floral bottom-left">💐</div>
      <div className="floral bottom-right">🌷</div>
      <div className="floral left">🌸</div>
<div className="floral left2">🌺</div>
<div className="floral left3">💐</div>

<div className="floral right">🌷</div>
<div className="floral right2">🌼</div>
<div className="floral right3">🌻</div>


      {!isOpen ? (
        <div className="closed-card-wrapper">
          <div className="closed-card" role="button" aria-label="Closed invitation">
            <div className="closed-front">
              <div className="closed-content">
                <p className="closed-title">Wedding Invitation</p>
                <p className="closed-sub">Tap the heart to open</p>
              </div>
            </div>

            {/* ribbon (appears when user taps) */}
            {showRibbon && <div className="ribbon-anim" aria-hidden />}

            {/* heart sits perfectly centered over the closed card */}
            <button
              className="heart-button"
              aria-label="Open invitation"
              onClick={openCard}
            >
              ❤️
            </button>
          </div>
        </div>
      ) : (
        <div className="open-card-wrapper">
          <div className="wedding-card">
            <div className="card-top-controls">
              {/* small audio control */}
              <button className="audio-btn" onClick={toggleAudio} aria-label="Toggle audio">
                {playing ? "🔊" : "🔈"}
              </button>
            </div>

            <h5 className="quran">
              وَخَلَقْنَاكُمْ أَزْوَاجًا
              <br />
              <small className="text-muted">And We created you in pairs (Quran 78:8)</small>
            </h5>

            <p className="invite-text">
              MR. & MRS. <span className="highlight">{father}</span>
              <br />
              CORDIALLY INVITE YOU TO THE WEDDING CEREMONY OF THEIR BELOVED SON
            </p>

            <h1 className="groom-name">{groom}</h1>

            {/* Couple image (use public/couple.png) */}
            <div className="image-space">
            <img src={`${import.meta.env.BASE_URL}wedding.jpeg`} alt="Couple" className="couple-img" />
            </div>

            <p className="program-title">PROGRAMME IN-SHA-ALLAH</p>
            <p className="date-time">
              <span className="day">SATURDAY & SUNDAY</span> <br />
              <span className="date">26 & 27</span> <br />
              <span className="month">OCTOBER</span> <br />
              <span className="year">2025</span> <br />
              <span className="time">AT 1:00 PM</span>
            </p>

            <p className="venue">VENUE: SHAHJAHN RESTAURANT | KEHROR ROAD, DUNYAPUR</p>
            <p className="contact">CONTACT: 0300-7320445 | 0328-7344744</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingCard;
