import { removeItem } from "@utils/storage";
import { DefaultButton } from "@components/common/Input";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeItem("token");
    navigate("/auth");
  };
  return (
    <div>
      <DefaultButton label="로그아웃" onClick={handleLogout} />
    </div>
  );
}

export default Main;
