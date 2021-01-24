import axios from "axios";

export async function fetchData(src) {
  let response = await axios.get(src);
  return response.data;
}
