import Mask_group from '../../../public/Mask_group.png'


const Banner = () => {
    return (
        <div className='flex'>
           
            <div className='w-1/2  text-black  mt-28'>
                <h1 className='text-3xl font-bold py-4 mb-8 irish-grover-regular' >Bringing the taste of your state at your doorstep..!</h1>

                <p className='mb-8'>Get the hot and freshly cooked food of your state delivered at your doorstep with the taste you deserve, in just no time.</p>
            
                
                <div className='mr-4 '>
                    <button className='btn bg-red-500 text-white'>Flower Order Now</button>
                    <button className='btn border-red-500'>Flower Details</button>
            
              </div>
            </div>

            <div className=' right-0 w-1/2 '>
                <img src={Mask_group} className='w-full h-[550px] object-cover' alt="" />
            </div>
        </div>
    );
};

export default Banner;