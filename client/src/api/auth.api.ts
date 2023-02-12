// axios;
import { AxiosResponse } from "axios";
import { TRegisterForm } from "types/auth";
import { Axios } from "./base.api";

export const userRegister = async (payload: TRegisterForm): Promise<AxiosResponse> => {
  const { email, password } = payload;
  const response = await Axios.post("/users/create", {
    email,
    password,
  });
  return response;
};
