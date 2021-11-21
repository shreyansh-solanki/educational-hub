const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  console.log(response);
  return response;
}
