import { Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
