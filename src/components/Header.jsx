import React from "react";

export default function Header({ onOpenHome }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 py-6 mb-8">
      <div className="container-app">
        <button type="button" onClick={onOpenHome} className="text-left">
          <h1 className="text-4xl font-bold text-white mb-2">Video Play</h1>
          <p className="text-gray-400">
            Просмотр сериалов с разными источниками видео
          </p>
        </button>
      </div>
    </header>
  );
}
