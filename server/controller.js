import axios from "axios";

export async function fetchData(src) {
  let response = await axios.get(src);
  return response.data;
}

export async function fetchCorsData(req, res) {
  const corsTarget = req.url.replace("/v1/cors", "");
  let data = await fetchData(corsTarget);

  res.status(200).json(data);
}
