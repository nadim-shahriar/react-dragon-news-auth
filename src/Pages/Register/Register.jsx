import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e)
        // const email  = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const phone = form.get('phone')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, phone, email, password)

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 p-10 rounded-md min-h-screen">
                <div className="hero-content p-20 bg-base-100 flex-col ">
                    <div className="text-center ">
                        <h1 className="text-4xl font-semibold">Register your account</h1>
                    </div>
                    <div className="card w-full">
                        <hr className="mt-[50px]" />
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your name" className="input  bg-base-200 lg:w-[500px] rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your number</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone Number" className="input  bg-base-200 lg:w-[500px] rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input  bg-base-200 lg:w-[500px] rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input bg-base-200 rounded-md" required />
                            </div>
                            <div className="flex gap-2 items-center mt-5">
                                <input className="w-[20px] h-[20px]" type="checkbox" name="" id="terms" />
                                <label htmlFor="terms">Accept <Link className="font-semibold">Term & Conditions</Link></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white rounded-md">Login</button>
                            </div>
                        </form>
                        <div className="text-center font-semibold">
                            <p className="text-[#706F6F]">Already Have An Account ? <Link to={'/login'}><span className="text-red-600"> Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;