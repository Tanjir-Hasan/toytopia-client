import { useEffect, useState } from "react";
import Toys from "./Toys";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
    const [allData, setAllData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [search, setSearch] = useState("");

    useTitle('All Toys');

    useEffect(() => {
        fetch('https://toytopia-server-nine.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setAllData(data.slice(0, itemsPerPage)));
    }, [itemsPerPage]);

    const options = [5, 10, 15, 20, 50];

    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
    };

    const handleSearch = () => {
        fetch(`https://toytopia-server-nine.vercel.app/getToysByText/${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllData(data);
            });
    };

    return (
        <div>
            {/* search */}
            <div className="w-1/4 mx-auto my-6">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        className="relative block w-[1px] min-w-0 flex-auto border border-solid border-[#4a2d4c] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f2727d] focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#f2727d] rounded-lg mr-3"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon3" />

                    <button
                        onClick={handleSearch}
                        className="relative z-[2]  px-6 py-2 text-xs font-medium uppercase ease-in-out  focus:outline-none focus:ring-0 h-12  text-[#4a2d4c] transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-[#f2727d] hover:text-white"
                        type="button"
                        id="button-addon3"
                        data-te-ripple-init>
                        Search
                    </button>
                </div>
            </div>

            {/* search */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((item, index) => (
                                <Toys
                                    item={item}
                                    key={item._id}
                                    index={index}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <select
                value={itemsPerPage}
                onChange={handleSelectChange}
                className="block w-1/4 mx-auto my-6 px-4 py-2 text-center border border-[#4a2d4c] focus:border-[#f2727d] focus:outline-none focus:ring-primary rounded-lg">
                {options.map(option => (
                    <option key={option} value={option} className="text-[#4a2d4c]">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AllToys;