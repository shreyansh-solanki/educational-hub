const API_KEY = 'key=AIzaSyBI0F6ZXwj2WNw9g57Y7vkZmhxE1F3r80k';
// const API_KEY = 'n';
const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}${API_KEY}`).then(
    r => r.json()
  );
  return response;
}
