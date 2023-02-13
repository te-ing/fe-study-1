import { removeItem } from "@utils/storage";
import { DefaultButton } from "@components/common/Input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userInfos } from "@store/auth";

function Main() {
  const navigate = useNavigate();
  const userInfo = useSelector(userInfos);

  const handleLogout = () => {
    removeItem("token");
    navigate("/auth");
  };
  return (
    <div>
      <p>email: {userInfo.email}</p>
      <DefaultButton label="로그아웃" onClick={handleLogout} />
    </div>
  );
}

export default Main;
