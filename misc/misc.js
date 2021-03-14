import moment from 'moment';

const timeToHourMinuteString = (dateNum) => {
  return moment(dateNum).format('HH:mm');
};

const calculateAmountToDrinkNow = (time, total, amount) => {
  const totalHours = total/amount;
  let nowAmount = hourMinutesToMinutes(
      timeToHourMinuteString(new Date()),
  ) - hourMinutesToMinutes(time);
  nowAmount = nowAmount < 0 ? 0 : nowAmount;
  const percent = nowAmount/(totalHours*60) * 100;
  const amountToDrink = percent/100 * total;
  return amountToDrink;
};

const hourMinutesToMinutes = (time) => {
  const t = time.split(':');
  return parseInt(t[0])*60 + parseInt(t[1]);
};

export {timeToHourMinuteString, calculateAmountToDrinkNow};
