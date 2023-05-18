import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {

    const { createUser, userUpdate } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = event => {
        event.preventDefault();

        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        if (password.length < 6) {
            setError('password must be at least 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
                userUpdate(name, photo);
                createUser.displayName = name;
                createUser.photoURL = photo;
                setSuccess('created successfully');
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    return (
        <div>
            {/* <p>{error}</p>
            <p>{success}</p>
            <form onSubmit={handleSignUp}>
                <input className="bg-slate-400" type="text" name="name" placeholder="Full Name" id="" required />
                <input className="bg-slate-400" type="email" name="email" placeholder="Email" id="" required />
                <input className="bg-slate-400" type="url" name="photo" placeholder="" id="Photo URL" required />
                <input className="bg-slate-400" type="password" name="password" placeholder="Password" id="" required />
                <input className="bg-slate-400" type="submit" value="Sign Up" />
            </form> */}


            {/*  */}

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f2727d] to-[#4a2d4c] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="mx-auto">
                                <h1 className="text-3xl font-semibold px-20">Create an account</h1>
                                <p className="text-[#f2727d] font-medium text-center mt-2">{error}</p>
                                <p className="text-[#f2727d] font-medium text-center mt-2">{success}</p>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    {/* form */}
                                    <form onSubmit={handleSignUp}>
                                        {/* name */}
                                        <div className="relative mt-5">
                                            <input id="text" type="text" name="name" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" required />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your Name</label>
                                        </div>
                                        {/* email */}
                                        <div className="relative mt-5">
                                            <input id="email" type="email" name="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        {/* photo */}
                                        <div className="relative mt-5">
                                            <input type="url" name="photo" id="Photo URL" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Photo URL" required />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Photo URL</label>
                                        </div>
                                        {/* password */}
                                        <div className="relative mt-5">
                                            <input id="password" type="password" name="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>

                                        <div className="relative">
                                            <input className="main-btn w-full my-5" type="submit" value="Create account" />
                                        </div>
                                    </form>

                                    {/* login */}

                                    <div className="text-center">
                                        <span className="font-thin">
                                            Already have a new account!
                                            <Link className="text-[#4a2d4c] font-bold underline underline-offset-4 hover:text-[#f2727d] hover:underline-offset-8 ml-1" to="/login">Login</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/login">Login</Link>
        </div>
    );
};

export default SignUp;