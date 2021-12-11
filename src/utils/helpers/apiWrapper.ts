import axios from "axios";

interface IProps {
  method: string;
  url: string;
  data?: any;
}
const BASE_CONNECTION = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const apiWrapper = async <T>({ method, url, data }: IProps) => {
  let res;
  switch (method) {
    case "get":
      res = await BASE_CONNECTION.get<T>(url);
      return res.data;
    case "post":
      res = await BASE_CONNECTION.post<T>(url, data);
      return res.data;
    case "put":
      res = await BASE_CONNECTION.put<T>(url, data);
      return res.data;
    case "delete":
      res = await BASE_CONNECTION.delete<T>(url);
      return res.data;
  }
};
