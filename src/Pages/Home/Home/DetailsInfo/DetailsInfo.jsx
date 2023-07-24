import { useLoaderData } from "react-router-dom";


const DetailsInfo = () => {
    const college = useLoaderData();
    const {  name, image, admissionDates, events, researchHistory, sports } = college;
    return (
        <div className=" rounded-lg  shadow-lg border-2 p-4 m-2 border-amber-300">
            <img src={image} alt={name} className="w-full h-64 object-cover mb-4 rounded-md" />
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
        </div>
    );
};

export default DetailsInfo;