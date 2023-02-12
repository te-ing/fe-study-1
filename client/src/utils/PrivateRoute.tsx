import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "./storage";

interface PrivateRouteProps {
  authentication: "LOGIN" | "LOGOUT";
}

export default function PrivateRoute({ authentication }: PrivateRouteProps): React.ReactElement {
  const isAuthenticated = !!getItem("token");

  switch (authentication) {
    case "LOGOUT": // 로그인 하지 않은 상태
      return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
    case "LOGIN": // 로그인 한 상태
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    default:
      return <Outlet />;
  }
}
