/* eslint-disable no-undef */
import { useState } from 'react';

import SearchBarList from './SearchBar/SearchBarList';
import CollegeCard from './CollegeCard/CollegeCard';
import SliderPage from './SliderPage/SliderPage';
import Gallery from './Gallery';
import Featured from './Featured/Featured';

// import Featured from './Featured/Featured';

const Home = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeClick = () => {
    fetch(`http://localhost:5000/colleges/${_id}`)
      .then(res => res.json())
      .then(data => setSelectedCollege(data))
  }

  return (
    <>
      <div className="p-4">
        <SearchBarList onCollegeClick={handleCollegeClick} />
        {selectedCollege && <CollegeCard selectedCollege={selectedCollege} />}
      </div>
      <div>
        <SliderPage />
        <Gallery/>
        <Featured />
        
      </div>

    </>
  );
};

export default Home;
