import styles from "./Register.module.scss";
import { DefaultButton } from "@components/common/Input";
import { FormEventHandler, ReactEventHandler, useState } from "react";
import { TRegisterForm } from "types/auth";
import { validRegisterForm } from "@utils/validate";

export default function Register() {
  const [inputValue, setInputValue] = useState({ email: "", password: "", passwordCheck: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const handleSubmitForm: ReactEventHandler<HTMLInputElement> = (e) => {
    setInputValue({ ...inputValue, [e.currentTarget.id]: e.currentTarget.value });
    setErrorMessage(validRegisterForm({ ...inputValue, [e.currentTarget.id]: e.currentTarget.value }));
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>회원가입</header>
      <form className={styles.login} onSubmit={handleRegister}>
        <input
          type="email"
          id="email"
          value={inputValue.email}
          onChange={handleSubmitForm}
          placeholder="이메일"
          className={styles.loginInput}
        />
        <input
          type="password"
          id="password"
          value={inputValue.password}
          onChange={handleSubmitForm}
          placeholder="비밀번호"
          className={styles.loginInput}
        />
        <input
          type="password"
          id="passwordCheck"
          value={inputValue.passwordCheck}
          onChange={handleSubmitForm}
          placeholder="비밀번호 확인"
          className={styles.loginInput}
        />
        <small role="alert">{errorMessage}</small>
        <DefaultButton type="submit" label="회원가입" disabled={errorMessage !== ""} />
      </form>
    </div>
  );
}
