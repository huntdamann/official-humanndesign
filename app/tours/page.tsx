import React from "react";

const Page: React.FC = () => {
  return (
    <div
      className="tour-page-container"
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <header style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="tour-header">3D Tour Examples</h1>
      </header>
      <main
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          marginTop: "3rem",
          border: "1px solid #ccc",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div className="tour-page-description">
          <span>
            At Humanndesign, we specialize in immersive 3D experiences designed
            to elevate your business or institution to its fullest potential.
            From the first impression to the finest detail, our tours give your
            prospective clients and customers a genuine sense of what awaits
            them.
          </span>
        </div>
        <div className="showcase-interactive">
          <div className="animated-box">
            <div className="outer-box">
              <div className="front side">
                <p>TranslateZ(250px)</p>
              </div>
              <div className="back side">
                <p>TranslateZ(-250px)</p>
              </div>
              <div className="right side">
                <p>TranslateZ(-250px)</p>
              </div>
              <div className="lef side">
                <p>fff</p>
              </div>
            </div>
          </div>
          <div
            className="tour-user-controls"
            style={{ textAlign: "center", padding: "1rem" }}
          >
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Title</p>
            <p style={{ color: "#555", margin: "0.5rem 0" }}>Description</p>
            <div style={{ marginTop: "1rem" }}>
              <button
                style={{
                  marginRight: "0.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Prev
              </button>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
