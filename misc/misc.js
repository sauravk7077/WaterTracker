import moment from 'moment';

const timeToHourMinuteString = (dateNum) => {
  return moment(dateNum).format('HH:mm');
};

export {timeToHourMinuteString};
