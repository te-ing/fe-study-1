import styles from "./Login.module.scss";
import { DefaultButton } from "@components/common/Input";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>로그인</header>
      <form className={styles.login}>
        <input type="text" id="user_id" placeholder="아이디" className={styles.loginInput} />
        <input type="password" id="password" placeholder="비밀번호" className={styles.loginInput} />
        <small role="alert">에러메시지</small>
        <DefaultButton type="submit" label="로그인" />
      </form>
    </div>
  );
}
