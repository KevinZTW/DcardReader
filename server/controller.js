import axios from "axios";

async function fetchData(url) {
  console.log(url);
  let response = await axios.get(url).catch((e) => {
    throw new Error(e.response.status);
  });
  return response.data;
}

export async function fetchCorsData(req, res) {
  const corsTarget = req.url.replace("/v1/cors", "");
  let data = await fetchData(corsTarget).catch((e) => {
    console.log("fail to fetch data, status :", e);
    res.status(400).json({ msg: `fail to fetch data ${e}` });
  });

  res.status(200).json(data);
}
