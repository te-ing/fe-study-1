import { TLoginForm, TRegisterForm } from "types/auth";
import { emailRegex } from "./regex";

export const validLoginForm = (inputValue: TLoginForm): string => {
  const { email, password } = inputValue;
  if (!email || !password) {
    return "모든 값을 입력해주세요.";
  }
  if (!emailRegex.test(email)) {
    return "이메일 형식이 올바르지 않습니다.";
  }
  if (password.length < 8) {
    return "비밀번호는 8자 이상이어야 합니다.";
  }
  return "";
};

export const validRegisterForm = (inputValue: TRegisterForm): string => {
  const { email, password, passwordCheck } = inputValue;
  if (!email || !password || !passwordCheck) {
    return "모든 값을 입력해주세요.";
  }
  if (!emailRegex.test(email)) {
    return "이메일 형식이 올바르지 않습니다.";
  }
  if (password.length < 8) {
    return "비밀번호는 8자 이상이어야 합니다.";
  }
  if (password !== passwordCheck) {
    return "비밀번호 확인이 올바르지 않습니다.";
  }
  return "";
};
