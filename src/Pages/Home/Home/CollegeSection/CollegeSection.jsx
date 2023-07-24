/* eslint-disable no-undef */
// CollegeSection.js
import { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';

const CollegeSection = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 ">
      {colleges.map(college => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
};

export default CollegeSection;
