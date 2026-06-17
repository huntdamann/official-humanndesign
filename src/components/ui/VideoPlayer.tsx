import React, { useState } from "react";

const VideoPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoPlayer = () => {
    setIsOpen(true);
  };

  const closeVideoPlayer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open the video player */}
      <button
        onClick={openVideoPlayer}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Watch Promo Video
      </button>

      {/* Video player modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              maxWidth: "800px",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeVideoPlayer}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            {/* Video element */}
            <video
              controls
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/videos/Rough_Draft.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
