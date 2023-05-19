export const getCacheData = (key: string) => {
  return localStorage.getItem(key); // read item from local storage
};

export const saveCacheData = (key: string, value: any) => {
  localStorage.setItem(key, value); // write item in local storage
};

export default { getCacheData, saveCacheData };