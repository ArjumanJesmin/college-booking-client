/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// src/components/MyProfile.js
import { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';


const MyProfile = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const handleUpdate = (data) => {
        fetch(`http://localhost:5000/users?email=${email}`, {
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
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    //   const myUser =  classes.find===user.email 
    let myUser = classes?.find(userEd => userEd.email === user ? user.email : '');
    console.log(myUser?.name);

    return (
        <>
            <Helmet>
                <title>College | My Profile </title>
            </Helmet>
            <div className="my-5">
                <h2>{myUser?.name}</h2>
                <img src={myUser?.photo} alt="" />
            </div>

        </>
    )
};

export default MyProfile;
