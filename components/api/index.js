import axios from "axios";

export default axios.create({
  baseURL: "https://external.abbts.ch:50102/abbts/api/",
  withCredentials: true
});
