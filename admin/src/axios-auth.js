import axios from "axios";

const instance = axios.create({
  baseURL: "https://stockarea-backend.herokuapp.com/api/",
});

export default instance;
