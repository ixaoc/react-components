import { axios } from "./api";

class User {
  constructor() {}

  login(data: { username: string; password: string }) {
    return axios.post("/auth/login", data);
  }

  logout({ refresh_token }: { refresh_token: string }) {
    return axios.post("/auth/logout", { refresh_token });
  }

  getInfo() {
    return axios.get("/user/info");
  }
}

export default new User();
