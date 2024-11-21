import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSIdeBar/LeftSideBar";
import Navbar from "../Shared/NavBar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
                <div >
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2 border">
                    <h1 className="text-4xl">News Is Coming....</h1>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;