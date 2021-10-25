import axios from "axios";

interface IProps {
  method: string;
  url: string;
  data?: any;
}
const BASE_CONNECTION = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const apiWrapper = ({ method, url, data }: IProps) => {
  switch (method) {
    case "get":
      return BASE_CONNECTION.get(url);
    case "post":
      return BASE_CONNECTION.post(url, data);
    case "put":
      return BASE_CONNECTION.put(url, data);
    case "delete":
      return BASE_CONNECTION.delete(url);
    default:
      return null;
  }
};
