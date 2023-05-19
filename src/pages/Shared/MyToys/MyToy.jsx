import { BsFillTrashFill } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';

const MyToy = ({ item, handleDelete, handleUpdate }) => {
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
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <th className=''>
                    <label>
                        <button onClick={() => handleUpdate(_id)}>
                            <RxUpdate className='text-[#4a2d4c] hover:text-[#f2727d]' size={"1.5rem"} />
                        </button>
                    </label>
                </th>
            </tr>
        </>
    );
};

export default MyToy;