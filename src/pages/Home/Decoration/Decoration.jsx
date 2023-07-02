
const Decoration = () => {
    return (
        <div className="space-y-8 w-11/12 mx-auto my-16">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center">We Decorate</h1>
            <p className="lg:text-3xl text-xl text-[#4a2d4c] font-serif font-thin text-center">- Let us decorate your kids room -</p>

            {/*  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div data-aos="zoom-in" className='border border-slate-200 p-10' style={{ backgroundImage: "linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )" }}>
                    <img src="https://i.ibb.co/QbnMHC1/Whimsical-Wonderland1.jpg" alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h3 className="decorationh3">Whimsical Wonderland</h3>
                    <p className="decorationp">Transform your child's room into a magical world with enchanting decorations and playful accessories.</p>
                </div>


                <div data-aos="zoom-in" className='border border-slate-200 p-10' style={{ backgroundImage: "linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )" }}>
                    <img src="https://i.ibb.co/kQCDHRQ/Cosmic-Dreamscape1.jpg" alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h3 className="decorationh3">Cosmic Dreamscape</h3>
                    <p className="decorationp">Ignite your child's imagination with a space-themed room featuring glow-in-the-dark stars and intergalactic accents.</p>
                </div>

                <div data-aos="zoom-in" className='border border-slate-200 p-10' style={{ backgroundImage: "linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )" }}>
                    <img src="https://i.ibb.co/dt2m6VJ/Dreamy-Fairyland.png" alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h3 className="decorationh3">Dreamy Fairyland</h3>
                    <p className="decorationp">Immerse your little ones in a fairy tale realm with ethereal decor, twinkling lights, and whimsical touches.</p>
                </div>

                <div data-aos="zoom-in" className='border border-slate-200 p-10' style={{ backgroundImage: "linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )" }}>
                    <img src="https://i.ibb.co/9Vbp6cS/Adventurous-Explorers.jpg" alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h3 className="decorationh3">Adventurous Explorers</h3>
                    <p className="decorationp">Create an inspiring space for young adventurers with nature-themed decor and interactive elements.</p>
                </div>
            </div>
        </div>

    );
};

export default Decoration;