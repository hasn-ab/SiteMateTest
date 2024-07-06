// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('183daca270264bad86fc5b72972fb82a');

import axios from 'axios';

export const getNews = async (query: string) => {
  if (!query) {
    return;
  }

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=183daca270264bad86fc5b72972fb82a&pageSize=20`,
  );

  return response.data;
};
