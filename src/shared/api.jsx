import axios from "axios";

// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  headers: {
    /* */
  },
  withCredentials: true,
});

export const AuthApi = {
  imgUpload: (payload) => api.post("/job/upload", payload),
  write: (payload, config) => api.post("/job/write", payload, { ...config }),
};
