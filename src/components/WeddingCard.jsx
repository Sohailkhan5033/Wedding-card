import React from "react";
import "../App.css"; // use main App.css for styling

const WeddingCard = () => {
  return (
    <div className="wedding-card-container d-flex align-items-center justify-content-center">
      <div className="wedding-card text-center p-4 shadow-lg rounded">
        {/* Quran Verse */}
        <h5 className="quran mb-3">
          وَخَلَقْنَاكُمْ أَزْوَاجًا <br />
          <small className="text-muted">And We created you in pairs (Quran 78:8)</small>
        </h5>

        {/* Parents Invite */}
        <p className="invite-text">
          MR. & MRS. <span className="highlight">BASHAIR AHMAD</span> <br />
          CORDIALLY INVITE YOU TO THE WEDDING CEREMONY OF THEIR BELOVED SON
        </p>

        {/* Groom Name */}
        <h1 className="groom-name">NAVEED AHMAD</h1>

        {/* Empty Space for Image */}
        <div className="image-space my-4">
          <p className="text-muted">[ <img src="wedding.jpeg" alt="pic" /> ]</p>
        </div>

        {/* Program Details */}
        <p className="program-title">PROGRAMME IN-SHA-ALLAH</p>
        <p className="date-time">
          <span className="day">SATURDAY & SUNDAY</span> <br />
          <span className="date">26 & 27</span> <br />
          <span className="month">OCTOBER</span> <br />
          <span className="year">2025</span> <br />
          <span className="time">AT 1:00 PM</span>
        </p>

        {/* Venue */}
        <p className="venue mt-3">
          VENUE: SHAHJAHN RESTURANT | kehror road DUNYAPUR
        </p>

        {/* Contact */}
        <p className="contact">
          CONTACT: 0300-7320445 | 0328-7344744
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
