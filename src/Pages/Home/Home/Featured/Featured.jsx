import './Featured.css';
import one from '../../../../assets/img.jpg'
import moment from 'moment/moment';


const Featured = () => {
    return (
        <div className="">
            <h2 className='text-center text-5xl font-bold text-yellow-500 pb-2'> Our College </h2>
            <div className="featured-item bg-fixed text-white ">

                <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 my-3 px-36">
                    <div>
                        <img src={one} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>{moment().format("MMM Do YY")}</p>
                        <p className="uppercase">Enigmatic riddles spark curiosity and imagination is dance.</p>
                        <p>Welcome to our college, where creativity thrives, ideas flourish, and lifelong learning prevails. Our vibrant campus offers state-of-the-art facilities, passionate faculty, and a supportive community. Embrace intellectual exploration, personal development, and diverse perspectives. Prepare for a fulfilling future with real-world skills and a global outlook. Join us on this transformative journey!</p>
                        <button className="block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white px-4 py-2 rounded-md text-center">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;