import styles from "./Register.module.scss";
import { DefaultButton } from "@components/common/Input";
import { FormEventHandler } from "react";

export default function Register() {
  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.username.value);
    console.log(e.currentTarget.password.value);
    console.log(e.currentTarget.password.value);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>회원가입</header>
      <form className={styles.login} onSubmit={handleRegister}>
        <input type="text" id="username" placeholder="아이디" className={styles.loginInput} />
        <input type="password" id="password" placeholder="비밀번호" className={styles.loginInput} />
        <input type="password" id="password_check" placeholder="비밀번호 확인" className={styles.loginInput} />
        <small role="alert">에러메시지</small>
        <DefaultButton type="submit" label="회원가입" />
      </form>
    </div>
  );
}
