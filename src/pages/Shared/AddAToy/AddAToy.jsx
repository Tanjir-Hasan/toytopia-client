import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {


    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'New Product Added',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    reset();
                }
            })

        console.log(data); // Access form data here
    };

    return (
        <div>
            this is add a toy
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Seller Name</label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        {...register('sellerName', { required: 'Seller Name is required' })}
                    />
                    {errors.sellerName && <span>{errors.sellerName.message}</span>}
                </div>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        defaultValue={user?.email}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        {...register('price', { required: 'Price is required' })}
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div>
                    <label>Photo URL</label>
                    <input
                        type="text"
                        {...register('photoUrl', { required: 'Photo URL is required' })}
                    />
                    {errors.photoUrl && <span>{errors.photoUrl.message}</span>}
                </div>

                <div>
                    <label>Category</label>
                    <select className="text-input" {...register("category")}>
                        <option value="sports">Sports</option>
                        <option value="van">Van</option>
                        <option value="truck">Truck</option>
                    </select>
                </div>

                <div>
                    <label>Available Quantity</label>
                    <input
                        type="number"
                        {...register('quantity', { required: 'Available Quantity is required' })}
                    />
                    {errors.quantity && <span>{errors.quantity.message}</span>}
                </div>

                <div>
                    <label>Rating</label>
                    <input
                        type="number"
                        {...register('rating', {
                            required: 'Rating is required',
                            min: 1,
                            max: 5,
                        })}
                    />
                    {errors.rating && <span>{errors.rating.message}</span>}
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAToy;