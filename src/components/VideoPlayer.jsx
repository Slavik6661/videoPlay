import React, { useState, useEffect } from "react";
import SourceSwitcher from "./SourceSwitcher";

export default function VideoPlayer({ episode, onClose, onWatched }) {
  const [currentSource, setCurrentSource] = useState("vk");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Отмечаем как просмотренное
    onWatched(episode.id);
    setIsLoading(false);
  }, [episode, onWatched]);

  const handleError = () => {
    setIsLoading(false);
  };

  // const getEmbedUrl = () => {
  //   if (currentSource === "vk") {
  //     return episode.vkUrl;
  //   } else {
  //     return episode.rutubeUrl;
  //   }
  // };

  // Проверяем доступность видео и показываем сообщение если ссылка имеет плейсхолдер формат
  const isPlaceholder = episode.vkUrl.includes("456239175");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn" title="Закрыть">
          ✕
        </button>

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-2">
            {episode.title}
          </h2>
          <p className="text-gray-400">{episode.description}</p>
        </div>

        {/* <SourceSwitcher
          currentSource={currentSource}
          onSourceChange={setCurrentSource}
        /> */}

        <div
          className="relative bg-black rounded-lg overflow-hidden mb-4"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
              <div className="loading-spinner"></div>
            </div>
          )}

          {isPlaceholder && currentSource === "vk" ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <div className="text-center text-gray-300 p-4">
                <p className="mb-2">Видео VK недоступно</p>
                <p className="text-sm text-gray-400">
                  В тестовом режиме используются демо-ссылки
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Попробуйте переключиться на Rutube
                </p>
              </div>
            </div>
          ) : (
            <iframe
              src={episode.vkUrl}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title={episode.title}
              onLoad={() => setIsLoading(false)}
              onError={handleError}
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="text-green-400 font-semibold">
              ✓ Отмечено как просмотренное
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
