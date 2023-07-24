/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CollegeName = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server-one.vercel.app/colleges')
            .then(response => response.json())
            .then(data => {
                setColleges(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching college data:', error));
    }, []);

    return (
        <div className="w-2/4 mx-auto border bg-white flex flex-col shadow-gray-50 rounded-xl mt-2 m-8">
            {colleges.map((college) => <Link className="py-3 text-lg font-semibold text-center border-b border-gray-300 snap-x hover:bg-stone-200 cursor-pointer" to="/admissionForm" key={college._id}>{college.name}</Link>)}
        </div>
    );
};

export default CollegeName;