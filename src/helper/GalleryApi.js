import axios from 'axios';

const KEY_API =
  '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export function GalleryApi(name, page) {
  return axios.get(
    `/search/photos/?client_id=${KEY_API}&page=${page}&per_page=${12}&query=${name}`
  );
}
