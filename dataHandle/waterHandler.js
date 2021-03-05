import {getByDate, saveByDate, getToday, saveToday} from './dataHandler';
import Actions from '../reduxHanlde/actions';
import {store} from '../reduxHanlde/store';

const addWater = async (amount) => {
  let waterToday = await getToday();
  if (waterToday == null) {
    waterToday = {};
  }
  const uuid = Math.random().toString();
  waterToday[uuid] = {
    'amount': amount,
    'time': Date.now(),
  };
  store.dispatch(Actions.addWater({uuid: uuid, ob: waterToday[uuid]}));
  await saveToday(waterToday);
};

export {addWater};
