import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/log-in";
import Home from "./pages/home";

function App() {
  return (
    <main className="m-5">
      <div className="flex justify-center overflow-y-hidden h-[calc(100vh-40px)] max-w-[1900px] mx-auto bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </main>
  )
}

export default App;
