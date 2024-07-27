import chefs1 from '../../../public/chefs1.png'
import chefs2 from '../../../public/chefs2.png'
import chefs3 from '../../../public/chefs3.png'
import chefs4 from '../../../public/chefs4.png'
import chefs5 from '../../../public/chefs5.png'

const Chefs = () => {
    return (
        <div>
            <div>
                <p className="text-center text-red-500 text-xl  ">MEET AND GREET</p>
                <h1 className="lg:text-5xl text-center text-4xl  -mb-2 font-bold lg:text-center lg:mt-4 mb-8">Meet Our Chefs</h1>
            </div>
            {/* Chefs Card Start */}
            
            <div className='grid md:grid-cols-2 ml-26 lg:grid-cols-5 justify-around p-4'>
                <div >
                    <img src={chefs1} alt="" />
                    <p className="text-center text-xl">Emmy Doe</p>
                </div>
                <div>
                    <img src={chefs2} alt="" />
                    <p className="text-center text-xl">Andrew Jackson </p>
                </div>
                <div>
                    <img src={chefs3} alt="" />
                    <p className="text-center text-xl">Ching Le </p>
                </div>
                <div>
                    <img src={chefs4} alt="" />
                    <p className="text-center text-xl">Karina Watson </p>
                </div>
                <div>
                    <img src={chefs5} alt="" />
                    <p className="text-center text-xl">Nikhil Arora</p>
                </div>
          </div>
        </div>
    );
};

export default Chefs;