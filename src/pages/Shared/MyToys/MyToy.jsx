
const MyToy = ({ item, handleDelete, handleUpdate }) => {
    const { _id, name, email } = item;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}>delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {/* <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{_id}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{name}</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">update</button>
            </th>
        </tr>
    );
};

export default MyToy;