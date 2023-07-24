/* eslint-disable react/prop-types */
// CollegeCard.js

import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const { _id, name, image, admissionDates, events, researchHistory, sports } = college;

    const handleShowDetails = (id) => {
        // Navigate to the details route with the college ID as a parameter
        history.push(`/colleges/${id}`);
    };

    return (
        <div className=" rounded-lg shadow-lg border-2 p-4 m-2 border-amber-300">
            <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="mb-4">
                <p className="font-bold">Admission Dates:</p>
                <p>{admissionDates}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Events:</p>
                <p>{events}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Research History:</p>
                <p>{researchHistory}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Sports:</p>
                <p>{sports}</p>
            </div>


            <Link to={`/detailsInfo/${college._id}`}><button onClick={() => handleShowDetails(_id)} className="block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white px-4 py-2 rounded-md text-center w-full">
                Details
            </button>
            </Link>
        </div>
    );
};

export default CollegeCard;
