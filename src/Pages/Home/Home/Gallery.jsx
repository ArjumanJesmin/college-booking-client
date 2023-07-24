import one from '../../../assets/swiper/sliderOne.jpg'
import two from '../../../assets/swiper/sliderTwo.jpg'
import three from '../../../assets/swiper/sliderThree.jpg'
import four from '../../../assets/swiper/sliderFour.jpg'
import five from '../../../assets/swiper/sliderFive.jpg'
import six from '../../../assets/swiper/sliderSix.jpg'
const Gallery = () => {
    const images = [one, two, three, four, five, six];
    return (
        <div className="py-12 mt-5">
            <h2 className='text-center text-5xl font-bold text-yellow-500'>College Gallery</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 shadow-lg border-2 rounded-lg my-5">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery; 