import { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../../provider/AuthProvider";


const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [allData, setAllData] = useState([]);

    const url = `http://localhost:5000/userToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])

    const handleDelete = _id => {
        console.log(_id)
    };

    const handleUpdate = _id => {
        console.log(_id)
    }

    return (
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
                        allData.map(item => <MyToy
                            item={item}
                            key={item._id}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        >

                        </MyToy>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyToys;