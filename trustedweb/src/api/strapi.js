// src/api/strapi.js
import axios from 'axios';

export const fetchArticles = async () => {
  const res = await axios.get(
    `http://localhost:1337/api/articles?populate=coverImage&sort=publishedAt:desc&pagination[limit]=6&publicationState=live`
  );
  console.log('🚀 API Response:', res.data); // <-- Leave this
  return res.data.data;
};
