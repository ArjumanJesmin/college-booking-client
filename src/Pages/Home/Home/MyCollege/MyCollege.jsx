/* eslint-disable no-undef */
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Rate from "../../../../Rate";

const MyCollege = () => {

    const [classes, setClasses] = useState([]);
    const [ratings, setRatings] = useState({});



    useEffect(() => {
        fetch('https://college-booking-server-one.vercel.app/admission')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleRatingChange = (classId, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [classId]: rating
        }));
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
                                    <div>
                                        <Rate
                                            rating={ratings[classData._id] || 0} 
                                            onRating={(rate) => handleRatingChange(classData._id, rate)} 
                                        />
                                        <p>Rating - {ratings[classData._id] || 0}</p> 
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyCollege;