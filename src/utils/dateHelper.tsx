import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export const FORMATS = {
  SIMPLE: 'DD/MM/YYYY',
  TIME_DATE: 'HH:mm - DD/MM/YYYY',
  COMPLEAT: 'ddd, DD [de] MMM [de] YYYY',
}

export const getCurrentDate = () => new Date();

export const format = (date, f = FORMATS.SIMPLE) => moment(date).format(f);

export const formatStringToDate = date => moment(date, FORMATS.SIMPLE).toDate();

export const getTotalDaysElapsed = (date) => {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6);

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(year, month - 1, day);
  const secondDate = new Date();

  const total = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

  return total - 1;
};
