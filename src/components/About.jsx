import React from 'react';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";





const About = () => {
    return (
        <div id='about' className='bg-[#cca479] relative'>
            <div className='container mx-auto pt-24 px-3'>
                <p className='text-center text-sm pb-4'>10 THINGS</p>
                <h1 className='lg:text-3xl text-white font-poppins text-center'>
                    You probably din't know < br />
                    about <span>ancient Egypt</span>
                </h1>
                <section className='lg:flex py-[10%] justify-center gap-x-[10%]'>
                    <div className='text-white lg:w-1/4'>
                        <h2 className='lg:text-3xl'>His original name was Not Tutankhamun</h2>
                        <p className='leading-7 py-6'>
                            Tutankhamun was originally named Tutankhaten. This name, witch literally means
                            "living image of the Aten", reflected the fact that Tutankhaten's parents
                            worshipped a sun god known as "The Aton". After a few years on the throne the you
                            king.
                        </p>
                        <a href="#" className='text-black'>Read More</a>
                    </div>
                    <div className='relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto'>
                        <div className='linear-gradient absolute h-full w-full rotate'></div>
                        <img src="/img/faraon.png" alt="image of faraon"
                            className='absolute w-full object-contain lg:-top-20 lg:-left-8' />
                        <div className='absolute -right-8 top-0 flex vertical-text'>
                            <p className='text-sm rotate-text'>Tutankhamun 1336-1327 BCE</p>
                            <SlArrowRight className='text-white text-2xl rotate-45' />
                        </div>
                    </div>
                </section>

                <div className='flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]'>
                    <div className='relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 flex justify-center items-center'>
                        <div className='linear-gradient absolute h-full w-full rounded-full '></div>
                        <img src="/img/cat.png" alt="image of Bastet" className='absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0' />
                        <div className='absolute -left-8 flex vertical-text'>
                            <p className='text-sm rotate-text'>
                                Bastet 2890 BCE
                            </p>
                            <SlArrowRight className='text-white text-2xl rotate-135' />
                        </div>
                    </div>
                    <div className='text-white lg:w-1/4'>
                        <h2 className='lg:text-3xl'>Cats were representd in religious practices</h2>
                        <p className='leading-7 py-6'>Cats in ancient Egypt were represented in social and religious
                            practices of Ancient Egypt for more than 30 centuries. Several
                            Ancient Egypt deitis were depicted and sculptured with cat-like
                            heads such as Mafdet, Bastet and Sekhmet, representing justice,
                            fertility and power. The deity Mut was also depicted as a cat and
                            in the company of a cat. </p>

                        <a href="#" className='text-black'>Read More</a>
                    </div>
                </div>
                <div className='flex justify-center lg:pt-0 py-[10%]'>
                    <button className='border border-solid border-black flex items-center justify-center
                    gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton'>
                        SHOW MORE <HiMiniArrowLongRight />
                    </button>
                </div>
                <section className='lg:py-0 py-[10%]'>
                    <p className='text-center text-sm pb-4'>THE ANCIENT</p>
                    <h1 className='lg:text-3xl text-white font-poppins text-center'>

                        Egyptian <span className='text-black'>civilization</span></h1>
                    <div className="lg:flex lg:w-3/4 mx-auto text-white py-[5%] leading-7 gap-x-[10%]">
                        <p>The history of Egypt, as a unified state, begins around 3050 BC. C. with Menes (Narmer),
                            who unified Upper and Lower Egypt and was its first king. Egyptian culture and customs
                            were remarkably stable and changed little over nearly 3,000 years.</p>
                        <p>Around 1279 BC. C. Ramses II, also known as the Great, ascended the throne. His would be
                            one of the longest reigns in Egyptian history. He built more temples, more statues and
                            obelisks, and fathered more children than any other pharaoh.</p>
                    </div>
                    <div className='lg:w-3/4 lg:h-[40rem] mx-auto'>
                        <img src="/img/civil.jpg"
                            alt="image civilization"
                            className='w-full h-full object-cover' />
                    </div>
                </section>

                <section className='py-[10%]'>
                    <p className='text-center text-sm pb-4'>GO BACK IN TIME</p>
                    <h1 className='lg:text-3xl text-white font-poppins text-center'>
                        Whit our top <span className='text-black'>experiences</span>
                    </h1>
                    <p className='text-white lg:w-1/3 py-8 mx-auto text-center leading-7'>
                        Magnificent monuments, lush delta, and whit its long past and
                        welcoming, story-loving people.
                    </p>
                    <div className='relative flex flex-col items-center justify-center pt-12'>
                        <div className='flex lg:flex-row flex-col lg:w-4/5 w-full mx-auto'>
                            <div className='relative lg:w-1/3 w-full lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn'>
                                <img src="/img/exp1.jpg"
                                    alt=""
                                    className='absolute w-full h-full object-cover' />
                                <span className='absolute bottom-8 text-white text-center'>
                                    <p className='text-sm'>GIZA</p>
                                    <p className='lg:text-3xl font-poppins'>Red Pyramid</p>
                                </span>
                            </div>
                            <div className='relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn'>
                                <img src="/img/exp2.jpg"
                                    alt=""
                                    className='absolute w-full h-full object-cover' />
                                <span className='absolute bottom-8 text-white text-center' >
                                    <p className='text-sm'>CAIRO</p>
                                    <p className='lg:text-3xl font-poppins'>Giza Pyramid</p>
                                </span>
                            </div>
                            <div className='relative lg:w-1/3 lg:h-[40rem] h-80 flex flex-col justify-center items-center hoverBtn'>
                                <img src="/img/exp3.jpg"
                                    alt=""
                                    className='absolute w-full h-full object-cover' />
                                <span className='absolute bottom-8 text-white text-center'>
                                    <p className='text-sm'>LUXOR</p>
                                    <p className='lg:text-3xl font-poppins'>Valley of Kings</p>
                                </span>
                            </div>
                            <button className='absolute left-4 lg:flex  flex-col hidden bg-transparent border-none outline-none cursor-pointer'>
                                <HiMiniArrowLongLeft className='text-2xl' /> BACK
                            </button>
                            <button className='absolute right-4 lg:flex  flex-col hidden bg-transparent border-none outline-none cursor-pointer'>
                                <HiMiniArrowLongRight className='text-2xl' /> NEXT
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
}

export default About;
