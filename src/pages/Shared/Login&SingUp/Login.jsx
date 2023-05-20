import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import useTitle from "../../../hooks/useTitle";

const Login = () => {

    const { signUser, googleAuthProvider, auth, userUpdate } = useContext(AuthContext);

    const [error, setError] = useState('');

    useTitle('Login');

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                userUpdate(loggedUser.displayName);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div >
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f2727d] to-[#4a2d4c] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="mx-auto">
                                <h1 className="text-3xl font-semibold px-48">Login</h1>
                                <p className="text-[#f2727d] font-medium text-center mt-2">{error}</p>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                    {/* form */}

                                    <form onSubmit={handleLogin}>
                                        <div className="relative mt-5">
                                            <input id="email" type="email" name="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative mt-5">
                                            <input id="password" type="password" name="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <input className="main-btn w-full my-5" type="submit" value="Login" />
                                        </div>
                                    </form>

                                    {/* sign up */}
                                    
                                    <div className="text-center">
                                        <span className="font-thin">
                                            New to Toytopia?
                                            <Link className="text-[#4a2d4c] font-bold underline underline-offset-4 hover:text-[#f2727d] hover:underline-offset-8 ml-1" to="/signup">Sign Up</Link>
                                        </span>
                                        <span>
                                            <p className="font-extrabold my-3">Or</p>
                                            <button onClick={handleGoogle}>
                                                <div className='relative hover:animate-spin w-14 h-14 border-4 border-r-[#4285F4] border-t-[#DB4437] border-b-[#0F9D58] border-l-[#F4B400] rounded-full'>
                                                    <FcGoogle size={"3rem"} className="absolute inset-0 mx-auto" />
                                                </div>

                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;