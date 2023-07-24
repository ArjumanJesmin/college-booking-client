/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SearchBar from "../../Home/Home/SearchBar/SearchBar";
import SearchBarList from "../../Home/Home/SearchBar/SearchBarList";
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [result, setResult] = useState([])

    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <Helmet>
                <title> College  | Navbar </title>
            </Helmet>
            <div className="bg-gradient-to-r from-cyan-300 to-lime-100">
                <Container>
                    <div className="navbar">
                        <div className="navbar-start">
                            <Link to="/">
                                <img src={logo} alt="logo" className="w-18 h-16" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link className=" text-xl " to='/'>Home</Link></li>
                                <li><Link className=" text-xl " to='/colleges'>Colleges</Link></li>
                                <li><Link className=" text-xl " to='/collegeName'>Admission</Link></li>
                                <li><Link className=" text-xl " to='/myCollege'>My College</Link></li>
                            </ul>
                            <div className="form-control">
                                <SearchBar setResult={setResult} />
                                <SearchBarList result={result} />
                            </div>
                        </div>
                        <div className="navbar-end">
                            {
                                user?.uid ?
                                    <>
                                        <div className="w-10 mx-4 ">
                                            <img className="rounded-full" src={user.photoURL} />
                                        </div>
                                        <div className="w-10 mx-4 ">
                                            <Link to="/myProfile/:id">Profile</Link>
                                        </div>

                                        <button onClick={handleLogout} className="btn btn-outline btn-warning mx-2">LogOut</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><button className="btn btn-outline btn-warning">Login</button>
                                        </Link>
                                    </>
                            }
                        </div>

                    </div>
                </Container>
            </div>
        </>


    );
};

export default Navbar;
