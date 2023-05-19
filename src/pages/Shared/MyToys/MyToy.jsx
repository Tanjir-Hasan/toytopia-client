import { BsFillTrashFill } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';

const MyToy = ({ item, handleDelete, handleUpdate }) => {
    const { _id, name, email } = item;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}>
                        <BsFillTrashFill className='text-[#4a2d4c] hover:text-[#f2727d]' size={"1.5rem"} />
                    </button>
                </label>
            </th>
            <td>{email}</td>
            <td>{name}</td>
            <td>{name}</td>
            <th>
                <label>
                    <button onClick={() => handleUpdate(_id)}>
                        <RxUpdate className='text-[#4a2d4c] hover:text-[#f2727d]' size={"1.5rem"} />
                    </button>
                </label>
            </th>
        </tr>
    );
};

export default MyToy;