// APIKEY modo desarrollo
const apikey = 'VFakcs4rwJg6tT81USTTFr38qmTKQhXa';

export default async function ListOfGifs({ keyword }) {
  if (keyword === '') {
    const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=4999`;
    const res = await fetch(apiURL, { next: { revalidate: 30 } });
    const response = await res.json();
    const { data = [] } = response;
    if (Array.isArray(data)) {
      const gifs = data.map(url => url.images.downsized_medium.url);
      return gifs;
    }
  } else {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=4999&offset=0&lang=en`;
    const res = await fetch(apiURL, { next: { revalidate: 30 } });
    const response = await res.json();
    const { data = [] } = response;
    if (Array.isArray(data)) {
      const gifs = data.map(url => url.images.downsized_medium.url);
      return gifs;
    }
  }
}
