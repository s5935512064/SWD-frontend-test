import axios from "axios";

// const userToken = localStorage.getItem("userToken");

// export const getRequest = async ({ method, url, params }) => {
//   const response = await axios({
//     method,
//     url,
//     params,
//     headers: {
//       authorization: `Bearer ${userToken}`,
//     },
//   });

//   return response.data;
// };

// export const postRequest = async ({ url, params }) => {
//   let isSuccess = false;
//   try {
//     await axios.post(url, params, {
//       headers: { authorization: `Bearer ${userToken}` },
//     });
//     isSuccess = true;
//   } catch (error) {
//     isSuccess = false;
//   }
//   return isSuccess;
// };

export class Request {
  static async getReqest({ url, params }) {
    const userToken = localStorage.getItem("userToken");
    const result = await axios.get(url, params, {
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    });
    return result.data;
  }
}
