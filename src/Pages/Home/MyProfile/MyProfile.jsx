/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// src/components/MyProfile.js
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    console.log(user?.email);

    const userEmail = user?.email;

    const handleUpdate = (data) => {
        fetch(`https://college-booking-server-one.vercel.app/users?email=${email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Posted successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });

            })
    }

    useEffect(() => {
        fetch('https://college-booking-server-one.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const showData = users?.find(data => data.email === userEmail)
    console.log(showData)


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={showData?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{showData?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {showData?.email}
                                <br />
                            </td>
                            <th>
                                <button onClick={() => handleUpdate(data)} className="btn btn-ghost btn-xs bg-green-600 text-white p-1">Update</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyProfile;
