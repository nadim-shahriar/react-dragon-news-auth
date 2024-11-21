import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl p-2 font-semibold mb-6 pt-4">All Category</h2>
            <div>
                {
                    categories.map(category => <NavLink
                        className="block py-4 px-12 text-xl hover:font-semibold hover:bg-[#E7E7E7] rounded-lg"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;