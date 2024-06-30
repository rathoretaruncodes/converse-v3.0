import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Login from "./pages/log-in";
import Home from "./pages/home";
import { useAuthContext } from "./context/auth-context";

function App() {
  const { authUser, isLoading } = useAuthContext();

  if(isLoading) {
    return null;
  }

  return (
    <main className="m-5">
      <div className="flex justify-center overflow-y-hidden h-[calc(100vh-40px)] max-w-[1900px] mx-auto bg-gray-900">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to={"/"} />} />
          <Route path="/login" element={!authUser ? <Login /> : <Navigate to={"/"} />} />
        </Routes>
      </div>
    </main>
  )
}

export default App;
