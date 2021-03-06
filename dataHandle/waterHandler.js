import {getByDate, saveByDate, getToday, saveToday} from './dataHandler';
import {addWater as aw, fillWater} from '../reduxHanlde/actions';
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
  store.dispatch(aw({uuid: uuid, ob: waterToday[uuid]}));
  await saveToday(waterToday);
};

const obIsEqualToToday = async (ob) => {
  return await getToday() == ob;
};

const fillTheEntireContainer = async (ob) => {
  if (!await obIsEqualToToday(ob)) {
    const waterConsumed = await getToday();
    store.dispatch(fillWater(waterConsumed != null ? waterConsumed : {}));
  }
};

export {addWater, obIsEqualToToday, fillTheEntireContainer};
