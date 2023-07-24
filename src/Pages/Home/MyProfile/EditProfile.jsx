/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/EditProfile.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [address, setAddress] = useState('');

    const history = useHistory();

    const handleSave = () => {
        // Send updated user data to the server
        const updatedUserData = {
            name,
            email,
            university,
            address,
        };

        // Replace 'yourUserId' with the actual user ID or fetch it from your authentication system
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <>
            <Helmet>
                <title>College | My College  </title>
            </Helmet>

            <div className="w-full m-6">
                <h1 className="text-3xl font-bold mb-4  text-yellow-600">My Classes</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Candidate Name</th>
                            <th>Subject</th>
                            <th>Candidate Email</th>
                            <th>date Of Birth</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classData, index) => (
                            <tr key={classData._id}>
                                <td>{index + 1}</td>
                                <td>{classData.candidateName}</td>
                                <td>{classData.subject}</td>
                                <td>{classData.candidateEmail}</td>
                                <td>{classData.dateOfBirth}</td>
                                <td><img className="w-12 rounded-full" src={classData.image} alt="image" /></td>
                                <td>
                                    <button className="bg-green-600 rounded-sm px-4 py-2 text-white sm-small" onClick={() => handleUpdate(classData._id)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EditProfile;
