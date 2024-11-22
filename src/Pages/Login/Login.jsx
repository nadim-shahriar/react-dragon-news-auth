import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e)
        // const email  = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)

        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 rounded-md min-h-screen">
                <div className="hero-content p-20 bg-base-100 flex-col ">
                    <div className="text-center ">
                        <h1 className="text-4xl font-semibold">Login your account</h1>
                    </div>
                    <div className="card w-full">
                        <hr className="mt-[50px]" />
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input  bg-base-200 lg:w-[500px] rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input bg-base-200 rounded-md" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white rounded-md">Login</button>
                            </div>
                        </form>
                        <div className="text-center font-semibold">
                            <p className="text-[#706F6F]">Don’t Have An Account ? <Link to={'/register'}><span className="text-red-600"> Register</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;