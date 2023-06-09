import { BsFillTrashFill } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyToy = ({ item, handleDelete }) => {
    const { _id, name, price, photoUrl, quantity, rating } = item;

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)}>
                            <BsFillTrashFill className='text-[#4a2d4c] hover:text-[#f2727d]' size={"1.5rem"} />
                        </button>
                    </label>
                </th>
                <td>{name}</td>
                <td><img src={photoUrl} className='w-1/2 h-20 rounded-2xl' alt="" /></td>
                <td>$ {price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <th className=''>
                    <label>
                        <Link to={`/update/${_id}`}>
                            <RxUpdate className='text-[#4a2d4c] hover:text-[#f2727d]' size={"1.5rem"} />
                        </Link>
                    </label>
                </th>
            </tr>
        </>
    );
};

export default MyToy;