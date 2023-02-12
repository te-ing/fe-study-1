export type TLoginForm = {
  email: string;
  password: string;
  passwordCheck?: string;
};
export type TLoginResponse = {
  message: string;
  token: string;
};

export type TRegisterForm = TLoginForm & {
  passwordCheck?: string;
};
export type TRegisterResponse = TLoginResponse;
