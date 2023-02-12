import styles from "./Auth.module.scss";
import { DefaultButton } from "@components/common/Input";
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>로그인</header>
      <form className={styles.login}>
        <input type="text" id="user_id" placeholder="아이디" className={styles.loginInput} />
        <input type="password" id="password" placeholder="비밀번호" className={styles.loginInput} />
        <small role="alert">에러메시지</small>
        <DefaultButton type="submit" label="로그인" />
        <Link to="/register">회원가입</Link>
      </form>
    </div>
  );
}
