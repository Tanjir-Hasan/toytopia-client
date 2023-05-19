import { Link } from "react-router-dom";

const Toys = ({ item, index }) => {

    const { _id, name, sellerName, category, price, quantity } = item;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/allToys/${_id}`}>
                    <button className="btn btn-ghost">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default Toys;