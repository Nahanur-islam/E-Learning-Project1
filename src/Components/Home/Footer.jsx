

const Footer = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse text-center">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:-mt-96">
                        <form className="card-body">
                            <div className="form-control ">
                                <h5 className="font-bold text-3xl text-center mb-4">Have a question?</h5>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                                <input type="Comments" placeholder="Comments" className="input input-bordered" required /> */}

                                <textarea name="" className="border" placeholder="comments here " id=""></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Submit</button>
                            </div>
                        </form>
                    </div>


                    <div className="text-center -mt-20 lg:text-left mt-80">
                        <h1 className="text-5xl font-bold">Contact Us</h1>
                        <p className="py-6">
                            For any queries or requests, feel free to reachout to our team, using the below mentioned mail
                            <p><span className=" mt-4 font-bold">Email:</span>
                                nahanurislam71@gmail.com</p>
                        </p>
                    </div>

                </div>
                {/* footer start*/}
                <div className="mt-96 flex">
                    <div className="flex">
                        <div>
                            <h1 className="mb-8">Ratul</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere commodo imperdiet lorem tincidunt semper maecenas scelerisque duis elit. <br /> Ipsum condimentum id semper habitasse fermentum dignissim viverra pretium aliquet.
                                © 2022 Copyright: Foodzilla</p>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <p><span className="bg-teal-400 font-bold">Social</span>
                                </p>
                                <p>Facebook
                                </p>
                                <p>     LinkedIn</p>
                                <p> Twitter</p>
                                <p>   Instagram</p>
                                <p>  YouTube</p>
                            </div>
                            <div>
                                <p><span className="bg-teal-400 font-bold">More</span>
                                </p>
                                <p>Blogs
                                 </p>
                                <p> Media</p>
                                <p>Gallery</p>
                                <p>  FAQs</p>
                                <p>About</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;