import { Route, Routes } from "react-router-dom";
import { Auth, Main } from "./pages";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
