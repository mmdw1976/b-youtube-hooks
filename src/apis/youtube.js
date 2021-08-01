import axios from "axios";

const KEY = "AIzaSyC0jyi9sFG9vM-fUrD1qaIM3ZmfNVD254Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
