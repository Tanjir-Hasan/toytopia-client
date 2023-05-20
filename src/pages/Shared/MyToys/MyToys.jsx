import { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";


const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [allData, setAllData] = useState([]);

    useTitle('My toys');

    const url = `https://toytopia-server-nine.vercel.app/userToys?email=${user?.email}&sortBy=asc`;

    useEffect(() => {

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setAllData(data);
            });
    }, [url]);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toytopia-server-nine.vercel.app/deleteToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            ).then(() => {
                                const remaining = allData.filter(item => item._id !== _id);
                                setAllData(remaining);
                            });
                        }
                    });
            }
        });
    };


    return (
        <div className="overflow-x-auto w-full">

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Ratings</th>
                        <th>Qty</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map(item => <MyToy
                            item={item}
                            key={item._id}
                            handleDelete={handleDelete}
                        >

                        </MyToy>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyToys;