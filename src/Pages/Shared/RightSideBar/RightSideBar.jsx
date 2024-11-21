import { FaGoogle, FaGithub} from "react-icons/fa";
import FbLogo from '../../../assets/fb.png'
import TwLogo from '../../../assets/twitter.png'
import IgLogo from '../../../assets/instagram.png'
import Image1 from '../../../assets/swimming.png'
import Image2 from '../../../assets/class.png'
import Image3 from '../../../assets/playground.png'
import bgPng from '../../../assets/bg.png'

const RightSideBar = () => {
    return (
        <div>
            <div className="p-2">
                <h2 className="text-2xl font-bold mb-8 ">Login With</h2>
                <button className="btn btn-outline w-full mb-2"><FaGoogle></FaGoogle>Login With Google</button>
                <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login With Github</button>
            </div>
            <div className="p-2 my-[30px]">
                <h2 className="text-2xl font-bold mb-8 ">Follow Us On</h2>
                <div className="border border-[#E7E7E7] rounded-lg">
                    <a className=" flex items-center gap-3 w-full mb-2 p-4"><img src={FbLogo} alt="" />Facebook</a>
                    <hr />
                    <a className=" flex items-center gap-3 w-full mb-2 p-4"><img src={TwLogo} alt="" />Facebook</a>
                    <hr />
                    <a className=" flex items-center gap-3 w-full mb-2 p-4"><img src={IgLogo} alt="" />Facebook</a>

                </div>
            </div>
            <div className="p-2 rounded-lg bg-[#F3F3F3] grid justify-center">
                <h2 className="text-2xl font-bold mb-6 pt-4">Q-Zone</h2>
                <img src={Image1} alt="" />
                <img className="my-6" src={Image2} alt="" />
                <img src={Image3} alt="" />
            </div>
            <div className="my-5">
                <img className="w-full  rounded-lg" src={bgPng} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;