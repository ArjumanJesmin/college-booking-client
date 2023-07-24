/* eslint-disable no-undef */
// App.js
import { useState } from 'react';
// import SearchBarList from './SearchBarList';
// import CollegeCard from './CollegeCard'; // Assuming you have a CollegeCard component
import SearchBarList from './SearchBar/SearchBarList';
import CollegeCard from './CollegeCard/CollegeCard';

const Home = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeClick = () => {
    fetch(`http://localhost:5000/colleges/${_id}`)
      .then(res => res.json())
      .then(data => setSelectedCollege(data))
  }

  return (
    <div className="p-4">
      <SearchBarList onCollegeClick={handleCollegeClick} />
      {selectedCollege && <CollegeCard selectedCollege={selectedCollege} />}

    </div>
  );
};

export default Home;
