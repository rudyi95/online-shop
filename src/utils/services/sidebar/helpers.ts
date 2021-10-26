import _pick from "lodash/pick";
// import queryString from "query-string";

export const pickObjValuesByKeys = (originalObj = {}, keysArray = []) => {
  return _pick(originalObj, keysArray);
};
