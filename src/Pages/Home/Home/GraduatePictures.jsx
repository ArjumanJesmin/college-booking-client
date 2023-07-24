import one from '../../../assets/group/one.jpg'
import two from '../../../assets/group/two.jpg'
import three from '../../../assets/group/three.jpg'
import four from '../../../assets/group/four.jpg'
import five from '../../../assets/group/five.jpg'
import six from '../../../assets/group/six.jpg'
import seven from '../../../assets/group/seven.jpg'
import eight from '../../../assets/group/eight.jpg'
const GraduatePictures = () => {
    const groupPictures = [one, two, three, four, five, six,seven,eight];

    return (
        <div className="container mx-auto py-6 my-5">
            <h1 className="text-5xl font-bold mb-4 text-yellow-500 text-center py-3">Graduates Group Pictures</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {groupPictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Picture ${index + 1}`}
                        className="rounded-lg shadow-md w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default GraduatePictures;
