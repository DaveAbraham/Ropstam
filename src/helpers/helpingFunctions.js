import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};
export const getData = async key => {
  return await AsyncStorage.getItem(key);
};

export const parseJson = jsonString => {
  try {
    let json = JSON.parse(jsonString);
    return json;
  } catch (e) {
    return false;
  }
};
