
import { NavLink } from 'react-router-dom';
import Flower1 from '../../public/Flower1.png'
import '../Components/Home/responsive.css'

const Navbar = () => {
    return (
        <div className='flex justify-around py-6 '>
            <div>
                <img src={Flower1} className='w-20 h-16 object-cover' alt="" />
            </div>
            <div className=' my-auto nav-link'>
                <ul className='flex gap-4'>
                    <NavLink to={'/'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Home</li>
                    </NavLink>
                    <NavLink to={'menu'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Menu</li>
                    </NavLink>
                    <NavLink to={'contact'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Contact</li>
                    </NavLink>
                    <NavLink to={'services'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>Services</li>
                    </NavLink>
                    <NavLink to={'about us'} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                    }>
                        <li className='text-lg font-semibold'>About Us</li>
                    </NavLink>
                </ul>
            </div>
            <div className=' my-auto'>
                <button className='btn bg-teal-500 text-white'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;