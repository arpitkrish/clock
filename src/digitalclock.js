import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#a8e6a8",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    height: "150px",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  };

  const clockStyle = {
    fontSize: "50px",
    color: "#000000",
    fontWeight: "bold",
  };

  const dateStyle = {
    fontSize: "20px",
    color: "#333333",
    marginTop: "5px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={clockStyle}>
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
      <div style={dateStyle}>{time.toLocaleDateString()}</div>
    </div>
  );
};

export default DigitalClock;