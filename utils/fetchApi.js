import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4ebe2ffbeemsh185ff8151bbe0d2p1c211ajsn482406954c31",
    },
  });

  return data;
};
