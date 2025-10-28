import React from "react";

export default function Meltimedia() {
  return (
    <div style={{ padding: 20 }}>
      <h2>React Multimedia Reference Demo (Public Assets)</h2>

      <h3>Image Example</h3>
      <img
        src="/image.jpg"
        alt="Demo visual example"
        width="400"
        style={{ display: "block", marginBottom: 20 }}
      />

      <h3>Audio Example</h3>
      <audio controls style={{ display: "block", marginBottom: 20 }}>
        <source src="/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <h3>Video Example</h3>
      <video width="480" controls>
        <source src="/sample-5s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}


