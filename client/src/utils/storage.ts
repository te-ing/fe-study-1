const storage = window.localStorage;

export const setItem = <T>(key: string, value: T) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw Error("스토리지 저장 중 문제가 발생하였습니다.");
  }
};

export const getItem = (key: string, defaultValue = "") => {
  try {
    const storedValue = storage.getItem(key);
    if (!storedValue) {
      return defaultValue;
    }
    return JSON.parse(storedValue);
  } catch (e) {
    throw Error("스토리지를 불러오던 중 문제가 발생하였습니다.");
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (e) {
    throw Error("스토리지를 삭제하던 중 문제가 발생하였습니다.");
  }
};
