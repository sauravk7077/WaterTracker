import AsyncStorage from '@react-native-async-storage/async-storage';

const settingsKey = 'setting';

const dateToDateString = (date) => {
  return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
};

const saveData = async (key, obj) => {
  try {
    const dataJSON = JSON.stringify(obj);
    await AsyncStorage.setItem(key, dataJSON);
  } catch (e) {}
};

const readData = async (key) => {
  let parsedData = null;
  try {
    const data = await AsyncStorage.getItem(key);
    parsedData = await JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
  return parsedData;
};

const getByDate = async (date) => {
  return await readData(dateToDateString(date));
};

const saveByDate = async (date, data) => {
  await saveData(dateToDateString(date), data);
};

const getToday = async () => {
  const now = new Date();
  return await getByDate(now);
};

const saveToday = async (data) => {
  const now = new Date();
  saveByDate(now, data);
};

const saveSettings = async (ob) => {
  const data = JSON.stringify(ob);
  await AsyncStorage.setItem(settingsKey, data);
};

const readSettings = async (ob) => {
  const data = await AsyncStorage.getItem(settingsKey);
  return JSON.parse(data);
};


export {getByDate, saveByDate, getToday, saveToday, saveSettings, readSettings};
