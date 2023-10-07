import axios, { AxiosResponse } from 'axios';

export type RestRsponseModel<Response, Input = null> = AxiosResponse<Response, Input>;

export const restRequest = <T, Response>(url: string, method: string, data?: T) => {
  return axios<Response>({ url, method, data });
};
