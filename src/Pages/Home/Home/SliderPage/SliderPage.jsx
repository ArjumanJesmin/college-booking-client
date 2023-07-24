/* eslint-disable no-undef */

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import one from '../../../../assets/slider/one.jpg'
import two from '../../../../assets/slider/two.jpg'
import three from '../../../../assets/slider/three.jpg'
import four from '../../../../assets/slider/four.jpg'
import five from '../../../../assets/slider/five.jpg'
import six from '../../../../assets/slider/six.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const SliderPage = () => {

  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={one} />
        <div data-src={two} />
        <div data-src={three} />
        <div data-src={four} />
        <div data-src={five} />
        <div data-src={six} />
      </AutoplaySlider>
    </>
  );
};

export default SliderPage;