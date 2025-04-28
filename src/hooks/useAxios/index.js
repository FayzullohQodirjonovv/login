import axios from "axios";

export const useAxios = () => {
  const request = ({ url, method, data, params, withAuth = true }) => {
    const headers = {
      "Content-Type": "application/json",
    };

    if (withAuth) {
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data,
      headers,
      params,
    }).then((res) => res.data);
  };

  return request;
};
