const environment = process.env.NODE_ENV;

export const endPoint =
  environment === "development" ? "http://localhost:4000" : "";

export const dcardEndPoint = "https://www.dcard.tw/v2";
