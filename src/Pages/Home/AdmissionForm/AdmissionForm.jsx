
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AdmissionForm = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { dateOfBirth, candidateEmail, subject, candidateName, address } = data;
                    const newItem = { candidateName, subject, candidateEmail, address, dateOfBirth, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/admission', newItem)
                        .then(data => {
                            console.log('after processing new menu item', data.data)

                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="my-8">
            <Helmet>
                <title>College | Admission Form </title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-600">Admission Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-2/3 mx-auto'>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Candidate Name*</span>
                    </label>
                    <input type="text" placeholder="class name"
                        {...register("candidateName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Subject*</span>
                    </label>
                    <input type="text" placeholder="class name"
                        {...register("subject", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Candidate Email*</span>
                    </label>
                    <input type="email" placeholder="class name"
                        {...register("candidateEmail", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Candidate Phone*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Address</span>
                    </label>
                    <input type="text" placeholder="address"
                        {...register("address", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Date of Birth</span>
                    </label>
                    <input type="date" placeholder="class name"
                        {...register("dateOfBirth")}
                        className="input input-bordered w-full " />
                </div>



                <input className="w-full block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white px-4 py-2 rounded-md text-center " type="submit" value="Submit" />
            </form>

        </div>

    );
};

export default AdmissionForm;
