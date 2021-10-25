import _pick from "lodash/pick";
import queryString from "query-string";

const pickObjValuesByKeys = (originalObj = {}, keysArray = []) => {
  return _pick(originalObj, keysArray);
};

const isMenuItemActive = (item, location) => {
  if (location.pathname === "/" && location.search) {
    let queryStringParsed = queryString.parse(location.search);

    return item.name === queryStringParsed.category;
  }
  return item.url === location.pathname;
};

export { pickObjValuesByKeys, isMenuItemActive };
