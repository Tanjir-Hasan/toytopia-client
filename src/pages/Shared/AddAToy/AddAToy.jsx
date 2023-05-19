import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const AddAToy = () => {


    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useTitle('Add toy');

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

        console.log(data); 
    };

    return (
        <div>
            this is add a toy
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f2727d] to-[#4a2d4c] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className="mx-auto">
                                <h1 className="text-3xl font-semibold px-20">Add a new TOY!!!</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"></div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Seller Name</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="text"
                                            defaultValue={user?.displayName}
                                            {...register('sellerName', { required: 'Seller Name is required' })}
                                        />
                                        {errors.sellerName && <span>{errors.sellerName.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="text"
                                            {...register('name', { required: 'Name is required' })}
                                        />
                                        {errors.name && <span>{errors.name.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Price</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="number"
                                            {...register('price', { required: 'Price is required' })}
                                        />
                                        {errors.price && <span>{errors.price.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Photo URL</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="text"
                                            {...register('photoUrl', { required: 'Photo URL is required' })}
                                        />
                                        {errors.photoUrl && <span>{errors.photoUrl.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Category</label>
                                        <select className="text-input peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" {...register("category")}>
                                            <option value="sports">Sports</option>
                                            <option value="van">Van</option>
                                            <option value="truck">Truck</option>
                                        </select>
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Available Quantity</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="number"
                                            {...register('quantity', { required: 'Available Quantity is required' })}
                                        />
                                        {errors.quantity && <span>{errors.quantity.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Rating</label>
                                        <input
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            type="number"
                                            {...register('rating', {
                                                required: 'Rating is required',
                                                min: 1,
                                                max: 5,
                                            })}
                                        />
                                        {errors.rating && <span>{errors.rating.message}</span>}
                                    </div>

                                    <div className="relative mt-6">
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Description</label>
                                        <textarea
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            {...register('description', { required: 'Description is required' })}
                                        />
                                        {errors.description && <span>{errors.description.message}</span>}
                                    </div>

                                    <button className="main-btn w-full my-5" type="submit">
                                        Add Toy
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;