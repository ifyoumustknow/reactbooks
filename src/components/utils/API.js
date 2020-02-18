import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

function API() {
  return axios.get(
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    "&limit=1&format=json&origin=*"
  );
}

export default API;