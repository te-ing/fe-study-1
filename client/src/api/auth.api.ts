import { TLoginForm, TLoginResponse, TRegisterForm, TRegisterResponse } from "types/auth";
import { TError } from "types/error";
import { Axios } from "./base.api";

export const userLogin = async (payload: TLoginForm): Promise<TLoginResponse & TError> => {
  try {
    const { email, password } = payload;
    const { data } = await Axios.post("/users/login", {
      email,
      password,
    });
    return data;
  } catch {
    return {
      message: "",
      token: "",
      error: "로그인에 실패하였습니다.",
    };
  }
};
export const userRegister = async (payload: TRegisterForm): Promise<TRegisterResponse & TError> => {
  try {
    const { email, password } = payload;
    const { data } = await Axios.post("/users/create", {
      email,
      password,
    });
    return data;
  } catch {
    return {
      message: "",
      token: "",
      error: "회원가입에 실패하였습니다.",
    };
  }
};
