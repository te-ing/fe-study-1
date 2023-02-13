import { isAxiosError } from "axios";
import { TLoginForm, TLoginResponse, TRegisterForm, TRegisterResponse } from "types/auth";
import { Axios } from "./base.api";

export const userLogin = async (payload: TLoginForm): Promise<TLoginResponse> => {
  try {
    const { email, password } = payload;
    const { data } = await Axios.post("/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.data.details) {
      throw Error(error.response?.data.details);
    }
    throw Error("오류가 발생했습니다.");
  }
};

export const userRegister = async (payload: TRegisterForm): Promise<TRegisterResponse> => {
  try {
    const { email, password } = payload;
    const { data } = await Axios.post("/users/create", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.data.details) {
      throw Error(error.response?.data.details);
    }
    throw Error("오류가 발생했습니다.");
  }
};
