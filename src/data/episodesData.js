export const generateEpisodeUrl = (season, episode) => {
  // Генерируем условные ссылки на видео
  // В реальном приложении здесь были бы реальные ID из VK и Rutube
  return {
    id: `S${season}E${episode}`,
    title: `Серия ${episode}`,
    description: `Сезон ${season}, серия ${episode}`,
    vkUrl: `https://vk.com/video_ext.php?oid=-229354135&id=${456239175 + season * 1000 + episode}&hd=2`,
    rutubeUrl: `https://rutube.ru/play/embed/${generateRutubeId(season, episode)}`,
    isWatched: false,
  };
};

// Генерируем ID для Rutube (хеш-подобные строки)
const generateRutubeId = (season, episode) => {
  const chars = "abcdef0123456789";
  let result = "";
  const seed = season * 100 + episode;

  for (let i = 0; i < 24; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export const episodesData = {
  season1: {
    seasonNumber: 1,
    episodeCount: 2,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season2: {
    seasonNumber: 2,
    episodeCount: 12,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${2}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-227638262&id=456239035&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${2}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-229262474&id=456239020&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season3: {
    seasonNumber: 3,
    episodeCount: 10,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${3}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-227638262&id=456239038&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${3}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-229262474&id=456239022&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `3`,
        title: `Серия ${3}`,
        description: `Сезон ${3}, серия ${3}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239076&hd=3`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `4`,
        title: `Серия ${4}`,
        description: `Сезон ${3}, серия ${4}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-220521189&id=456239138&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `5`,
        title: `Серия ${5}`,
        description: `Сезон ${3}, серия ${5}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239079&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `6`,
        title: `Серия ${6}`,
        description: `Сезон ${3}, серия ${6}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239080&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `7`,
        title: `Серия ${7}`,
        description: `Сезон ${3}, серия ${7}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239080&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `8`,
        title: `Серия ${8}`,
        description: `Сезон ${3}, серия ${8}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-230357266&id=456239389&hd=3`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `9`,
        title: `Серия ${9}`,
        description: `Сезон ${3}, серия ${9}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239084&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `10`,
        title: `Серия ${10}`,
        description: `Сезон ${3}, серия ${10}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239085&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `11`,
        title: `Серия ${11}`,
        description: `Сезон ${3}, серия ${11}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-225933603&id=456239086&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
      {
        id: `12`,
        title: `Серия ${12}`,
        description: `Сезон ${3}, серия ${12}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-227638262&id=456239057&hd=4`,
        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season4: {
    seasonNumber: 4,
    episodeCount: 14,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season5: {
    seasonNumber: 5,
    episodeCount: 12,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season6: {
    seasonNumber: 6,
    episodeCount: 13,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season7: {
    seasonNumber: 7,
    episodeCount: 10,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
  season8: {
    seasonNumber: 8,
    episodeCount: 8,
    episodes: [
      {
        id: `1`,
        title: `Серия ${1}`,
        description: `Сезон ${1}, серия ${1}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-194455959&id=456241710&hd=4`,

        rutubeUrl: ``,
        isWatched: false,
      },

      {
        id: `2`,
        title: `Серия ${2}`,
        description: `Сезон ${1}, серия ${2}`,
        vkUrl: `https://vkvideo.ru/video_ext.php?oid=-80669546&id=456256152&hd=3`,

        rutubeUrl: ``,
        isWatched: false,
      },
    ],
  },
};

export const getAllSeasons = () => {
  return [
    episodesData.season1,
    episodesData.season2,
    episodesData.season3,
    episodesData.season4,
    episodesData.season5,
    episodesData.season6,
    episodesData.season7,
    episodesData.season8,
  ];
};

export const getSeasonById = (seasonNumber) => {
  const season = Object.values(episodesData).find(
    (s) => s.seasonNumber === seasonNumber,
  );
  return season || null;
};
