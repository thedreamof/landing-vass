import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default {
  getAlbums() {
    return api.get('albums');
  },

  getPhotosByAlbum(idAlbum: number) {
    return api.get(`albums/${idAlbum}/photos`);
  },
};
