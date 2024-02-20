import d from '../assets/download.png'

import blog1 from '../assets/blog10_grande.webp'
import blog2 from '../assets/blog11_grande.webp'
import blog3 from '../assets/blog12_grande.webp'
const Blog = () => {
    return (
        <div className='my-20 max-w-7xl mx-auto px-2'>
            <h1 className="text-center text-[#69BFF1] md:text-3xl text-xl">Our Recent Posts</h1>
            <div className="flex justify-center items-center">
                <img className='' src={d} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                <div className='shadow hover:shadow-2xl bg-[#FEF2F8] rounded'>
                    <img src={blog1} alt="" />

                    <div className='p-2 space-y-3'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Tinytots Gift Pack for birthdays</h1>
                        <h1 className='text-center text-md mt-3 text-gray-400 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, necessitatibus eos sapiente commodi tempora exercitationem ipsam alias qui ullam iusto soluta ab ipsum facere eius laudantium natus rem,</h1>

                        <div className='flex justify-between items-center gap-4 px-2'>
                            <button className='btn bg-[#FEEB26]'>Read More</button>
                            <h1 className='text-[#69BFF1]'>21-Feb-2024</h1>
                        </div>
                    </div>
                </div>
                <div className='shadow hover:shadow-2xl bg-[#FEF2F8] rounded'>
                    <img src={blog2} alt="" />

                    <div className='p-2  space-y-3'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Tinytots Gift Pack for birthdays</h1>
                        <h1 className='text-center text-md mt-3 text-gray-400 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, necessitatibus eos sapiente commodi tempora exercitationem ipsam alias qui ullam iusto soluta ab ipsum facere eius laudantium natus rem,</h1>

                        <div className='flex justify-between items-center gap-4 px-2'>
                            <button className='btn bg-[#FEEB26]'>Read More</button>
                            <h1 className='text-[#69BFF1]'>21-Feb-2024</h1>
                        </div>
                    </div>
                </div>
                <div className='shadow hover:shadow-2xl bg-[#FEF2F8] rounded'>
                    <img src={blog3} alt="" />

                    <div className='p-2  space-y-3'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Tinytots Gift Pack for birthdays</h1>
                        <h1 className='text-center text-md mt-3 text-gray-400 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, necessitatibus eos sapiente commodi tempora exercitationem ipsam alias qui ullam iusto soluta ab ipsum facere eius laudantium natus rem,</h1>

                        <div className='flex justify-between items-center gap-4 px-2'>
                            <button className='btn bg-[#FEEB26]'>Read More</button>
                            <h1 className='text-[#69BFF1]'>21-Feb-2024</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;