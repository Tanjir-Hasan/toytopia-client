import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Navbar.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="navbar bg-[#fef0e7] sticky top-0 z-50 px-4 py-3 lg:px-44 lg:py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
                        {user ? (
                            <>
                                <li><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                                <li><ActiveLink to="/addAToy">Add a Toy</ActiveLink></li>
                            </>
                        ) : null}
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                    </ul>
                </div>

                <div className="inline-flex items-center">
                    <img src="https://i.ibb.co/tLBkYvM/tkthao219-bubududu.gif" className="h-8 hidden sm:block" alt="" />
                    <Link className="btn btn-ghost normal-case text-2xl text-[#4a2d4c] font-bold">Toytopia</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ActiveLink to="/">Home</ActiveLink></li>
                    <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
                    {user ? (
                        <>
                            <li><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                            <li><ActiveLink to="/addAToy">Add a Toy</ActiveLink></li>
                        </>
                    ) : null}
                    <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="tooltip text-red" data-tip={user.displayName}>
                            <img src={user.photoURL} alt="" className="text-red h-14 rounded-full" />
                        </div>
                        <button onClick={handleLogOut} className="inline-block bg-[#4a2d4c] hover:bg-[#f08080] text-white font-semibold py-2 px-8 ml-4 rounded-full text-base leading-8 tracking-normal">Log out</button>
                    </>
                ) : (
                    <Link to="/login" className="main-btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;