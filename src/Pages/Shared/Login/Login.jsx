/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import img from '../../../assets/login.jpg'

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(Result => {
                const user = Result.user
                console.log(user);
                Swal.fire({
                    title: 'User LogIn Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
    }
    return (
        <>
            <Helmet>
                <title>College | Login </title>
            </Helmet>
            <div>
                <h1 className="text-5xl font-bold text-center py-3">Login now!</h1>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <img src={img} alt="" />
                        </div>
                        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/* Todo:make button disable for captch */}
                                <div className="form-control mt-6">
                                    <input className="block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white px-4 py-2 rounded-md text-center" disabled={false} type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='p-2 '><small> Now Here? Create an account<Link to="/signUp" className='px-4  text-violet-600'>SignUp  </Link></small></p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
