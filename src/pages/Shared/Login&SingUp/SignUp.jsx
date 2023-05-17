import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {

    const {createUser, userUpdate} = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = event => {
        event.preventDefault();

        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        if(password.length <6){
            setError('password must be at least 6 characters')
            return;
        }

        createUser(email, password)
        .then(result=>{
            const createUser= result.user;
            console.log(createUser)
            userUpdate(name, photo);
            createUser.displayName = name;
            createUser.photoURL = photo;
            setSuccess('created successfully');
            setError('');
            form.reset();

        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    return (
        <div>
            <p>{error}</p>
            <p>{success}</p>
            <form onSubmit={handleSignUp}>
                <input className="bg-slate-400" type="text" name="name" placeholder="Full Name" id="" required />
                <input className="bg-slate-400" type="email" name="email" placeholder="Email" id="" required />
                <input className="bg-slate-400" type="url" name="photo" placeholder="" id="Photo URL" required />
                <input className="bg-slate-400" type="password" name="password" placeholder="Password" id="" required />
                <input className="bg-slate-400" type="submit" value="Sign Up" />
            </form>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default SignUp;