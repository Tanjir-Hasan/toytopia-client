import { useContext, useEffect, useState } from "react";
import MyToy from "./MyToy";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";


const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [allData, setAllData] = useState([]);

    const [sortOrder, setSortOrder] = useState('asc');

    useTitle('My toys');

    const url = `https://toytopia-server-nine.vercel.app/userToys?email=${user?.email}&sortBy=${sortOrder}`;

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
                                'The Toy has been deleted.',
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

    const handleSortOrder = (order) => {
        setSortOrder(order);
    };


    return (
        <>
            <div className="text-center my-6">
                <button onClick={() => handleSortOrder('asc')}  className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-[#f08080] focus:text-[#f08080] py-2 px-4 border border-[#4a2d4c] hover:border-transparent rounded mr-2">Ascending</button>
                <button onClick={() => handleSortOrder('desc')} className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-[#f08080] focus:text-[#f08080] py-2 px-4 border border-[#4a2d4c] hover:border-transparent rounded ml-2">Descending</button>
            </div>

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
        </>
    );
};

export default MyToys;