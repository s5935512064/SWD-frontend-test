import axios from "axios";
import { Request } from "./Request";

export const baseURL = `https://swdapi.ddns.net:8090/data/ttntest`;

export const getData = async () => {
  const data = await Request.getReqest({
    url: `${baseURL}`,
    params: {},
  });

  return data;
};
