import axiosClient from "./axiosClient";

const catergoryApi = {
  getAll() {
    const url = `/catergory`;
    return axiosClient.get(url);
  },
};

export default catergoryApi;
