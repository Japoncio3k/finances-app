import { AxiosResponse } from 'axios';

export interface RestRequestModelGet<Response> {
  onCompleted?: (data: AxiosResponse<Response>) => void;
  onError?: (error: Error) => void;
}
