import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 py-6 mb-8">
      <div className="container-app">
        <h1 className="text-4xl font-bold text-white mb-2">🎬 Video Play</h1>
        <p className="text-gray-400">
          Просмотр сериалов с разными источниками видео
        </p>
      </div>
    </header>
  );
}
