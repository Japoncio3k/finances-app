import { AxiosResponse } from 'axios';

export interface RestRequestModelGet<Response> {
  onCompleted?: (data: RestRsponseModel<Response, null>) => void;
  onError?: (error: Error) => void;
}

export type RestRsponseModel<Response, Input = null> = AxiosResponse<Response, Input>;
