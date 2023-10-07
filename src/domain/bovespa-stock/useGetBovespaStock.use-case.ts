import { AxiosResponse } from 'axios';
import { format, isWeekend, sub } from 'date-fns';
import { DailyQueryResponse } from '../../data/rest/bovespa-stock.datamodel';
import { BovespaStockDatasource } from '../../data/rest/bovespa-stock.datasource';

interface DailyPrice {
  open: number;
  close: number;
}

interface GetBovespaStockInput {
  onCompleted: (price: DailyPrice) => void;
  onError: (error: Error) => void;
}

export const useGetBovespaStock = (props: GetBovespaStockInput) => {
  const onCompleted = (data: AxiosResponse<DailyQueryResponse>) => {
    let date = sub(new Date(), { days: 1 });
    while (isWeekend(date)) {
      date = sub(date, { days: 1 });
    }
    const dayData = data.data['Time Series (Daily)'][format(date, 'yyyy-MM-dd')];
    props.onCompleted({ open: parseFloat(dayData['1. open']), close: parseFloat(dayData['4. close']) });
  };
  const { getDaily } = BovespaStockDatasource({ onCompleted, onError: props.onError });

  return { getDaily };
};
