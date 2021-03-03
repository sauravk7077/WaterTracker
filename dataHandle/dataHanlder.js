import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveData = async (key, obj) => {
  try {
    const dataJSON = JSON.stringify(obj);
    await AsyncStorage.setItem(key, dataJSON);
  } catch (e) {}
};

export const readData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return await JSON.parse(data);
  } catch (e) {}
};

