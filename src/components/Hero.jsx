import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Hero = () => {
    return (
        <div className=" bg-[url('/img/egipto.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex flex-col justify-between min-h-screen lg:pt-0 pt-24">
                <div className="text-[#ce8a5c]">
                    <p className="lg:text-4xl font-bold lg:leading-normal text-white font-poppins">THE ANCIENT WORLD</p>
                    <h1>Discover the awe-inspiring <br />Pyramids of Giza and ancient Egypt's</h1>
                    <a href="#about" className="text-white no-underline">
                        <MdKeyboardDoubleArrowDown className="text-2xl" />

                        SCROLL DOWN</a>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-white font-bold">THE ANCIENT</p>
                    <h4 className="text-white text-2xl py-4 font-poppins">Egyptian
                        <span className="text-black ">civilization</span>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Hero;
