import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Login = () => {

    const { signUser, googleAuthProvider, auth, userUpdate } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            userUpdate(name);

        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })


    }

    const handleGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <p>{error}</p>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>

                            <input className="bg-slate-400" type="email" name="email" placeholder="Email" id="" required />
                            <input className="bg-slate-400" type="password" name="password" placeholder="Password" id="" required />
                            <input className="bg-slate-400" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
                <button onClick={handleGoogle}>Google</button>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;