import feature1 from '../../../public/feature1.png'
import feature2 from '../../../public/feature2.png'
import feature3 from '../../../public/feature3.png'
import feature4 from '../../../public/feature4.png'
import feature5 from '../../../public/feature5.png'
import { IoMdStar } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";





const Card = () => {
    return (
        <>
            <div>
                <p className='text-center mt-8 text-2xl'><span className="text-red-500 mt-8 font-bold">BROWSE OUR MENU</span>
                </p>
                <h1 className="text-5xl font-bold text-center mt-2 mb-4">
                    Hungry? Order & Eat
                </h1>
            </div>
            <div className='flex justify-around'>
                <div>
                    <div className='relative'>
                        <img src={feature1} alt="" />
                        <IoIosHeart className='absolute top-0 right-0 mr-6 text-2xl text-orange-500 mt-8 ' />
                    </div>
                    <div className='flex justify-around'>
                        <h5>Sabudana Khichdi</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 150</span></p>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <div className='flex mt-5'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={feature2} alt="" />
                        <IoIosHeart className='absolute top-0 right-0 mr-6 text-2xl text-orange-500 mt-8 ' />
                    </div>
                    <div className='flex justify-around'>
                        <h5>Veg Noodles</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 170</span></p>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <div className='flex mt-5'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={feature3} alt="" />
                        <IoIosHeart className='absolute top-0 right-0 mr-6 text-2xl text-orange-500 mt-8 ' />


                    </div>
                    <div className='flex justify-around'>
                        <h5>Masala Dosa</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 120</span></p>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <div className='flex mt-5'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={feature4} alt="" />
                        <IoIosHeart className='absolute top-0 right-0 mr-6 text-2xl text-orange-500 mt-8 ' />
                    </div>
                    <div className='flex justify-around'>
                        <h5>Fried Momos</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 80</span></p>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <div className='flex mt-5'>
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={feature5} alt="" />
                        <IoIosHeart className='absolute top-0 right-0 mr-6 text-2xl text-orange-500 mt-8 ' />

                    </div>
                    <div className='flex justify-around'>
                        <h5>Kadhai Paneer</h5>
                        <p><span className='text-red-500 font-bold'>Rs. 125</span></p>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <div className='flex mt-5'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <button className="btn 
                    bg-gray-500 text-white">Order</button>
                    </div>
                </div>

            </div>
            <div className='text-center p-8'>
               
                <button className='btn  border-red-600'>View Full Menu</button>
               
            </div>
        </>
    );
};

export default Card;

