import {getToday, saveToday} from './dataHandler';
import {addWater as aw, fillWater} from '../reduxHanlde/actions';
import {store} from '../reduxHanlde/store';
import uuid from 'react-native-uuid';

const addWater = async (amount) => {
  let waterToday = await getToday();
  if (waterToday == null) {
    waterToday = {};
  }
  const id = uuid.v1();
  waterToday[id] = {
    'amount': amount,
    'time': Date.now(),
  };
  store.dispatch(aw({uuid: id, ob: waterToday[id]}));
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
