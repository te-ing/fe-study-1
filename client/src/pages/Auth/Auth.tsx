import styles from "./Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { DefaultButton } from "@components/common/Input";
import { FormEventHandler, ReactEventHandler, useState } from "react";
import { validLoginForm } from "@utils/validate";
import { userLogin } from "@/api/auth.api";
import { setItem } from "@utils/storage";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/auth";

export default function Auth() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(inputValue);
      setItem("token", response.token);
      dispatch(setUserInfo({ email: inputValue.email }));
      navigate("/");
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  const handleSubmitForm: ReactEventHandler<HTMLInputElement> = (e) => {
    setInputValue({ ...inputValue, [e.currentTarget.id]: e.currentTarget.value });
    setErrorMessage(validLoginForm({ ...inputValue, [e.currentTarget.id]: e.currentTarget.value }));
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>로그인</header>
      <form className={styles.login} onSubmit={handleLogin}>
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
        <small role="alert" className={styles.error}>
          {errorMessage}
        </small>
        <DefaultButton type="submit" label="로그인" disabled={errorMessage !== ""} />
        <Link to="/register">회원가입</Link>
      </form>
    </div>
  );
}
