import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import { useState } from "react";
import Navbar from "../Shared/NavBar/Navbar";


const News = () => {
    const { id } = useParams();
    console.log(id)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>Hi</p>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default News;