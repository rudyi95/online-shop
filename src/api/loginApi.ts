import { apiWrapper } from "../utils/helpers/apiWrapper";

const loginApi = {
  login: (data: loginData) =>
    apiWrapper<loginResponse>({ method: "post", url: "/auth/login", data }),
};

export default loginApi;
