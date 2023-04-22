import Axios from "axios";

export const ApiGET = async (url, user) => {
  try {
    const response = await Axios({
      method: "get",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: user.access_token
      }
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const ApiPOST = async (url, auth, inputData) => {
  try {
    const response = await Axios({
      method: "post",
      url,
      data: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.user.access_token
      }
    });
    return response.data;
  } catch (err) {
    return err;
  }
};
