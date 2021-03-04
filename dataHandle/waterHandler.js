import {getByDate, saveByDate, getToday, saveToday} from './dataHandler';


const addWater = async (amount) => {
  let waterToday = await getToday();
  console.log(waterToday);
  if (waterToday == null) {
    waterToday = {};
  }
  const uuid = Math.random().toString();
  waterToday[uuid] = {
    'amount': amount,
    'time': Date.now(),
  };
  await saveToday(waterToday);
};

export {addWater};
