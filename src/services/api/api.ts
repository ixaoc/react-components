import axios from "axios";
import { config } from "config";

import { dispatch, getState } from "store";
import { actions as UserActions } from "store/user";

export const INITIAL_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: config.AUTH_API_URI,
  headers: INITIAL_HEADERS,
});

instance.interceptors.request.use(
  (config) => {
    const access_token = getState().user.access_token;

    if (access_token.length > 0) {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, message } = error.response.data;

    if (status === 403 && message === "access_token_expired") {
      const state = getState();
      const {
        data: { access_token },
      } = await instance.post("/auth/refresh", {
        refresh_token: state.user.refresh_token,
      });

      dispatch(UserActions.changeAccessToken(access_token));
      error.config.headers["Authorization"] = `Bearer ${access_token}`;

      return instance.request(error.config);
    }

    return Promise.reject(error);
  }
);

export { instance as axios };
