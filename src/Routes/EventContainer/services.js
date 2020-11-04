import axios from 'axios';

export const getEvents = () => {
  return axios.get('/mocks/events.json');
};
