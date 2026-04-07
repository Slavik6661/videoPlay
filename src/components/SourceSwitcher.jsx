import React from "react";

export default function SourceSwitcher({ currentSource, onSourceChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onSourceChange("vk")}
        className={`source-btn ${currentSource === "vk" ? "active" : ""}`}
      >
        VK Video
      </button>
      <button
        onClick={() => onSourceChange("rutube")}
        className={`source-btn ${currentSource === "rutube" ? "active" : ""}`}
      >
        Rutube
      </button>
    </div>
  );
}
