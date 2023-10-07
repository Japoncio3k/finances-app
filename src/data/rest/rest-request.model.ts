import { RestRsponseModel } from '@app/core';

export interface RestRequestModelGet<Response> {
  onCompleted?: (data: RestRsponseModel<Response, null>) => void;
  onError?: (error: Error) => void;
}
