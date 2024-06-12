import React from "react";


const Home = () => {

    return (

    <>
    <section className="max-w-full min-h-screen p-2">
        <div className="w-full h-screen home-background py-4 rounded relative">
            <div className="w-[600px] h-14 m-auto fixed left-1/2 -translate-x-1/2 z-50 hidden lg:block
            before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white before:bg-opacity-10 before:backdrop-blur-xl before:rounded-full before:shadow-lg before:z-0
            ">
                <ul className="w-full h-full flex flex-row items-center justify-center gap-10 relative z-10 text-white">
                    <li>Home</li>
                    <li>Pokedex</li>
                    <li>Games</li>
                    <li>TCG</li>
                    <li>Anime</li>
                    <li>News</li>
                </ul>
            </div>

            <div className="absolute w-full h-32 bg-transparent left-0 -bottom-16 flex items-center justify-center gap-5">
                <div className="w-60 h-full bg-white rounded-xl shadow-2xl"></div>
                <div className="w-60 h-full bg-white rounded-xl shadow-2xl"></div>
                <div className="w-60 h-full bg-white rounded-xl shadow-2xl"></div>
                <div className="w-60 h-full bg-white rounded-xl shadow-2xl"></div>
            </div>

        </div>
    </section>

    <section className="max-w-full min-h-screen overflow-hidden mt-20">
        <div className="w-full h-20 bg-red-500">

        </div>
    </section>
    </>
    );


};

export default Home;