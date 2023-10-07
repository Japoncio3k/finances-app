import { DailyQueryResponse } from './bovespa-stock.datamodel';
import { RestRequestModelGet } from './rest-request.model';
import { restRequest } from '../../core';

export const BovespaStockDatasource = (props: RestRequestModelGet<DailyQueryResponse>) => {
  const getDaily = (ticker: string) => {
    restRequest<null, DailyQueryResponse>(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}.SAO&apikey=${process.env['AV_API_KEY']}`,
      'get',
    )
      .then(props.onCompleted)
      .catch(props.onError);
  };

  return { getDaily };
};
