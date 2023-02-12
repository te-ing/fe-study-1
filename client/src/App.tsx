import { Route, Routes } from "react-router-dom";
import { Auth, Main } from "./pages";
import Register from "./pages/Register/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute authentication="LOGOUT" />}>
        <Route path="auth" element={<Auth />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
