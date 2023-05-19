
const Toys = ({item, index}) => {

    const {_id, name, sellerName, category, price, quantity} = item;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Toys;