import { Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
