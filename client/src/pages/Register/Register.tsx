import styles from "./Register.module.scss";
import { DefaultButton } from "@components/common/Input";
import { validRegisterForm } from "@utils/validate";
import { FormEventHandler, ReactEventHandler, useState } from "react";
import { userRegister } from "@api/auth.api";
import { setItem } from "@utils/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/auth";

export default function Register() {
  const [inputValue, setInputValue] = useState({ email: "", password: "", passwordCheck: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await userRegister(inputValue);
    if (response.error) {
      // eslint-disable-next-line no-alert
      alert(response.error);
    }
    setItem("token", response.token);
    dispatch(setUserInfo({ email: inputValue.email }));
    navigate("/");
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
        <small role="alert" className={styles.error}>
          {errorMessage}
        </small>
        <DefaultButton type="submit" label="회원가입" disabled={errorMessage !== ""} />
      </form>
    </div>
  );
}
