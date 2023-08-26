import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazon-backend-6o7h.onrender.com/",
});

export default instance;
