/*
 * @Author: Monve
 * @Date: 2022-04-18 13:38:21
 * @LastEditors: Monve
 * @LastEditTime: 2022-04-18 13:38:21
 * @FilePath: /web-json-storage/src/json-storage/index.ts
 */
function stringify(obj: string) {
  let str;
  try {
    str = JSON.stringify(obj);
  } catch (e) {
    str = null;
  }

  return str;
}

function parse(str: string) {
  let obj = null;
  try {
    obj = JSON.parse(str);
  } catch (e) { }

  return obj;
}

export const storage = {
  /**
   * 
   * @param key 
   * @returns null or string or json object
   */
  get: (key: string): null | string | any => {
    const str = window.localStorage.getItem(key);
    if (!str || str === '""') {
      return null
    }
    const json = parse(str)
    if (!json) {
      return str
    }
    return json
  },
  /**
   * 
   * @param key 
   * @param value string or any can be stringified by JSON.stringify
   */
  set: (key: string, value: any) => {
    window.localStorage.setItem(key, stringify(value) || value);
  },
  clear: () => {
    window.localStorage.clear();
  }
}