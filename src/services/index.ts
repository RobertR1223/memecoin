import xior from "xior";

export const axios = xior.create({
  baseURL: "/",
});

export const spinWheelApi = async (wallet: string, ipAddress?: string) => {
  return (await axios.get(`api/spin?wallet=${wallet}&ipAddress=${ipAddress}`))
    .data.data;
};

export const getLatestSpinTime = async (wallet: string, ipAddress: string) => {
  return (
    await axios.get(`api/spin/lastSpin?wallet=${wallet}&ipAddress=${ipAddress}`)
  ).data.data;
};

export const getTotalPoints = async (wallet: string) => {
  return (await axios.get(`api/spin/totalPoints?wallet=${wallet}`)).data.data;
};
