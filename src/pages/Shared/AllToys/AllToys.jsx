import { useEffect, useState } from "react";
import Toys from "./Toys";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {

    const [allData, setAllData] = useState([]);

    useTitle('All Toys');

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div>
            all toys

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map(item => <Toys
                                item={item}
                                key={item._id}
                            >
                                 
                            </Toys>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllToys;