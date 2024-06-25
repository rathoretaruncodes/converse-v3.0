import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    });
    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className="flex items-center">
            <div className="flex">
                <div className="w-[420px] p-8 space-y-6 bg-gray-800 rounded-l-lg">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmitForm}>
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-3 py-2 mt-1 bg-gray-700 border-none rounded-md text-gray-300 focus:outline-none"
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username:e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 mt-1 mb-1 bg-gray-700 border-none rounded-md text-gray-300 focus:outline-none"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password:e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium bg-slate-50 rounded-md "
                        >
                            Log In
                        </button>
                        <div className="text-center text-gray-400">
                            Don't have an account? <Link to={"/signUp"} className="text-white hover:underline">Sign Up</Link>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 bg-gray-700 p-8 w-[420px] rounded-r-lg">
                    <blockquote className="text-lg font-semibold leading-snug text-white">
                        &ldquo;After using this app, my productivity has skyrocketed. The features are so intuitive and easy to
                        use.&rdquo;
                    </blockquote>
                    <div className="text-gray-400">- John Doe, Acme Inc.</div>
                </div>
            </div>
        </div>
    )
}

export default Login;