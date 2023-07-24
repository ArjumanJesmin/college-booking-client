/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// SearchBarList.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchBarList = ({ result, onCollegeClick }) => {
    return (
        <div className="w-full bg-white flex flex-col shadow-gray-50 rounded-xl mt-2 max-h-24 snap-x overflow-y-auto">
            {result?.map((item, id) => (
                <div
                    key={id}
                    className="p-2 text-center border-b border-gray-300 snap-x hover:bg-stone-200 cursor-pointer"
                    onClick={() => onCollegeClick(item._id)}
                >
                    <Link to="/collegeSection">{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default SearchBarList;


