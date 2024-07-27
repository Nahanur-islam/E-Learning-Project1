// import React from 'react';
// import footer from '../../../public/footer.png'

// const Footer = () => {
//     return (
//         <>
//             <div className='flex justify-around'>
//                 {/* image */}
//                 <div className='relative  h-[35rem] w-full flex justify-center items-center m-auto -z-50'>
//                     <img src={footer} alt="" className='absolute top-0 left-0 h-[35rem] w-[80rem] m-auto ml-36 ' />
//                     <div className='absolute top-0 left-0 ml-[30rem] w-1/2 mt-28'>
//                         <h1 className=" font-bold text-4xl mb-2">Contact Us</h1>
//                         <p className="">For any queries or requests, feel free to reachout to <br /> our team, using the below mentioned mail</p>
//                         <div className="">
//                             <span className="font-bold">Email:</span> examplemail@gmail.com</div>
//                     </div>
//                 </div>
//                 {/* image end */}
//                 <div className='form h-[20rem] w-[18rem] bg-white z-50  border   '>

//                 <h1 className='text-center'>How can I help You?</h1>
//                 </div>


//         </div>
//         </>
//     );
// };

// export default Footer;








import footer from "../../../public/footer.png"

import logo from "../../../public/Logo.png"

const Footer = () => {
    return (
        <>
            <div className="relative mt-10 flex flex-col justify-center">
                <div className=" flex justify-center">
                    <img src={footer} alt="" className="w-full h-full absolute top-0 left-0 -z-50" />

                    <div className="left-text w-1/2  ">
                        <div className="mt-[6rem] ml-[6rem]">
                            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                            <p>
                                For any queries or requests, feel free to reachout to our team,
                                using the below mentioned mail
                            </p>
                            <p>
                                <span className="font-bold">Email:</span> examplemail@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="form bg-gray-100 h-[20rem] w-[18rem] m-auto p-8 gap-3 rounded-md -mt-10">
                        <h1 className="font-bold text-2xl text-center mb-6">
                            Have a question?
                        </h1>
                        <p className="font-semibold">Email</p>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border rounded-md w-56"
                        />
                        <p className="font-semibold">Comments</p>
                        <input
                            type="text-box"
                            placeholder="Comments"
                            className="border rounded-md h-16 w-56"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="mt-6 text-center w-56 bg-black text-white rounded-md py-1 font-semibold"
                        />
                    </div>
                </div>
                <div className="w-[50rem] h-[14rem] bg-white m-auto rounded-md mt-32 flex">
                    <div className="pl-10 pt-4 w-[30rem]">
                        <img src={logo} alt="" className="w-40" />
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere commodo imperdiet lorem tincidunt semper maecenas scelerisque duis elit. Ipsum condimentum id semper habitasse fermentum dignissim viverra pretium aliquet.</p>
                    </div>
                    <div className="flex gap-10 m-auto">
                        <div >
                            <h1 className="primaryText font-semibold">Social</h1>
                            <ul>
                                <li className="flex flex-col">
                                    <a href="facebook.com">Facebook</a>
                                    <a href="linkedin.com">LinkedIn</a>
                                    <a href="twitter.com">Twitter</a>
                                    <a href="instagram.com">Instagram</a>
                                    <a href="youtube.com">YouTube</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="primaryText font-semibold">More</h1>
                            <ul>
                                <li className="flex flex-col">
                                    <a href="facebook.com">Blogs</a>
                                    <a href="linkedin.com">Media</a>
                                    <a href="twitter.com">Gallery</a>
                                    <a href="instagram.com">FAQs</a>
                                    <a href="youtube.com">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
