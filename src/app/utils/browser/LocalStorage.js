export const LOCAL_STORAGE_KEY = {
  CARTS: "app_carts",
  AUTH_USER: "app_authUser",
};

export default class LocalStorageUtils {

  static getItem(key, defaultValue = null) {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem(key) || defaultValue);
    }
    return "undefined";
  }

  static setItem(key, value) {
    if (typeof localStorage !== "undefined") {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static removeItem(key) {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}
