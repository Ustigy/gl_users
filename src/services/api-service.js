const apiBase = 'http://127.0.0.1:3000';

export default async function getData(term) {
  let url;
  if (term === '') {
    url = `${apiBase}`;
  } else {
    url = `${apiBase}?term=${term}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
}