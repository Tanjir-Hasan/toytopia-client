
const Decoration = () => {
    return (
        <div className="space-y-8 w-11/12 mx-auto my-16">
            <h1 className="text-7xl text-[#4a2d4c] font-extrabold text-center">We Decorate</h1>
            <p className="text-3xl text-[#4a2d4c] font-serif font-thin text-center">- Let us decorate your kids room -</p>

            {/*  */}

            <div className="lg:flex justify-between gap-5 mb-10 max-h-96">
                
                <div className="flex w-1/2" style={{height: "635px"}}>
                    <img src="https://i.ibb.co/9G8VsyH/Robotics-World.jpg" className="decorationimg" style={{ boxShadow: "10px 10px #4a2d4c"}} alt="" />
                    <div className="bg-[#fef0e7] max-h-96 pl-24 pr-3 py-16 rounded-3xl space-y-4">
                        <h3 className="decorationh1">Whimsical Wonderland</h3>
                        <p className="decorationp">Transform your child's room into a magical world with enchanting decorations and playful accessories.</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Decoration;