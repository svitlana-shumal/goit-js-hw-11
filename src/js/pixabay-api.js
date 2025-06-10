import axios from 'axios';

const myKey = '50779054-370421c42d6be36ab94d11a5f';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(url, { params }).then(response => {
    if (response.data.hits.length === 0) {
      throw new Error(`Sorry, there are no images matching your search query. Please try again!
`);
    }
    return response.data;
  });
}
