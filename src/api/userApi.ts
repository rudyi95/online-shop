import { apiWrapper } from "../utils/helpers/apiWrapper";

const loginApi = {
  addUser: (data: User) =>
    apiWrapper<User>({ method: "post", url: "/users", data }),
};

export default loginApi;
