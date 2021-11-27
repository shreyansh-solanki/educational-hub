const API_KEY = 'key=AIzaSyAf6CJMn8jqyYLDojB7cZyK41y-qE0fsDI';
const API_BASE_URL = 'https://www.googleapis.com/youtube/v3/';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}${API_KEY}`).then(
    r => r.json()
  );
  console.log(response);
  return response;
}
