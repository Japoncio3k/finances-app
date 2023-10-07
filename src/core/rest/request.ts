import axios from 'axios';

export const restRequest = <T, Response>(url: string, method: string, data?: T) => {
  return axios<Response>({ url, method, data });
};
