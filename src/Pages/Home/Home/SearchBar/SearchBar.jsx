/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setResult }) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://college-booking-server-one.vercel.app/colleges")
            .then(res => res.json())
            .then(data => {setResult(data);
                const result = data.filter((user) => {
                    return (
                        value &&
                        user.name &&
                        user.name.toLowerCase().includes(value.toLowerCase()));
                });
                setResult(result);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div>
            <div className="flex bg-white items-center space-x-2 border border-gray-300 rounded-md shadow-lg">
                <div className="icon pl-2">
                    <FaSearch className='text-gray-500 text-2xl' />
                </div>
                <input type="text" className="input focus:outline-none" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    );
};

export default SearchBar;
