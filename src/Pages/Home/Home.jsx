import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSIdeBar/LeftSideBar";
import Navbar from "../Shared/NavBar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
                <div >
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold mb-8 pt-2">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;