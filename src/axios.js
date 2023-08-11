import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "/.netlify/functions/api",
});

export default instance;
