import React, { useRef } from "react";
import Navbar from "../Utilities/Navbar";
import Footer from "../Utilities/Footer";

import { Swiper, SwiperSlide} from "swiper/react";
import { faArrowLeftLong, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import "swiper/css";



const Games = () => {

    const swiperRef = useRef();

    return (
      <main>
        <header>
          <Navbar />
        </header>

        <section className="h-screen bg-white">
          <div className="max-w-[1300px] h-full m-auto overflow-hidden py-16">
            <div className="w-full h-full py-8 relative">
            
              <div className="w-full text-center">
                <p>Featured</p>
                <h2 className="font-bold text-5xl uppercase mb-5"> Pokemon </h2>
              </div>
              
              <Swiper
                loop
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                <SwiperSlide>
                  <div className="w-full h-auto">
                    <div className="flex flex-wrap">
                      <div className="flex-[0_0_30%] max-w-[30%]">

                        <div className="w-full h-[500px] text-left p-8 lg:block hidden">

                            <h3>#0006</h3>
                            <h1 className="text-5xl font-bold tracking-wide">Venusaur</h1>

                            <div className="w-full h-36 mt-10">
                              <p>This is a sample description. This is a sample description. This is a sample description.
                                This is a sample description. This is a sample description. This is a sample description.
                              </p>
                            </div>

                            <div className="w-full mt-10">
                              <h2 className="font-bold mb-5">Evolution</h2>
                                <div className="w-4/5 flex items-center justify-between">
                                  <img src="/images/3d-images/bulbasaur.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/ivysaur.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/venusaur.png" alt="" className="w-16 h-16 object-cover" />
                                </div>
                            </div>
                        </div>

                      </div>

                      <div className="lg:flex-[0_0_40%] lg:max-w-[40%] md:flex-[0_0_50%] md:max-w-[50%] flex-[0_0_100%] max-w-[100%]">
                        <div className="w-full h-full flex flex-col items-center justify-center p-8">
                            <img src="/images/3d-images/Venusaur.png" alt="" className="w-full h-full object-contain"/>
                            <h1 className="font-bold text-2xl tracking-wide mt-5 lg:hidden block">Venusaur</h1>
                        </div>
                      </div>

                      <div className="flex-[0_0_30%] max-w-[30%] lg:block hidden">
                        <div className="w-full h-[500px] text-left p-8">

                          <div className="w-full mb-5">
                            <h1 className="text-lg font-semibold mb-5">Type</h1>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full tryGrass"></div>
                              <div className="w-8 h-8 rounded-full poisonIcon"></div>
                            </div>
                          </div>

                          <div className="w-full mb-10">
                            <h1 className="text-lg font-semibold mb-5">Weakness</h1>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full fireIcon"></div>
                              <div className="w-8 h-8 rounded-full iceIcon"></div>
                              <div className="w-8 h-8 rounded-full flyingIcon"></div>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Hp:</span>
                              <progress className="progress w-56" value={0} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Atk:</span>
                              <progress className="progress w-56" value={25} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Def:</span>
                              <progress className="progress w-56" value={50} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Spd:</span>
                              <progress className="progress w-56" value={75} max="100"></progress>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-auto">
                    <div className="flex flex-wrap">
                      <div className="flex-[0_0_30%] max-w-[30%]">

                        <div className="w-full h-[500px] text-left p-8 lg:block hidden">

                            <h3>#0006</h3>
                            <h1 className="text-5xl font-bold tracking-wide">Charizard</h1>

                            <div className="w-full h-36 mt-10">
                              <p>This is a sample description. This is a sample description. This is a sample description.
                                This is a sample description. This is a sample description. This is a sample description.
                              </p>
                            </div>

                            <div className="w-full mt-10">
                              <h2 className="font-bold mb-5">Evolution</h2>
                                <div className="w-4/5 flex items-center justify-between">
                                  <img src="/images/3d-images/charmander.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/charmeleon.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/charizard.png" alt="" className="w-16 h-16 object-cover" />
                                </div>
                            </div>
                        </div>

                      </div>

                      <div className="lg:flex-[0_0_40%] lg:max-w-[40%] md:flex-[0_0_50%] md:max-w-[50%] flex-[0_0_100%] max-w-[100%]">
                        <div className="w-full h-full flex flex-col items-center justify-center p-8">
                            <img src="/images/3d-images/charizard.png" alt="" className="w-full h-full object-contain"/>
                            <h1 className="font-bold text-2xl tracking-wide mt-5 lg:hidden block">Charizard</h1>
                        </div>
                      </div>

                      <div className="flex-[0_0_30%] max-w-[30%] lg:block hidden">
                        <div className="w-full h-[500px] text-left p-8">

                          <div className="w-full mb-5">
                            <h1 className="text-lg font-semibold mb-5">Type</h1>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full fireIcon">

                              </div>
                            </div>
                          </div>

                          <div className="w-full mb-10">
                            <h1 className="text-lg font-semibold mb-5">Weakness</h1>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full waterIcon"></div>
                              <div className="w-8 h-8 rounded-full electricIcon"></div>
                              <div className="w-8 h-8 rounded-full rockIcon"></div>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Hp:</span>
                              <progress className="progress w-56" value={0} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Atk:</span>
                              <progress className="progress w-56" value={25} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Def:</span>
                              <progress className="progress w-56" value={50} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Spd:</span>
                              <progress className="progress w-56" value={75} max="100"></progress>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full h-auto">
                    <div className="flex flex-wrap">
                      <div className="flex-[0_0_30%] max-w-[30%]">

                        <div className="w-full h-[500px] text-left p-8 lg:block hidden">

                            <h3>#0006</h3>
                            <h1 className="text-5xl font-bold tracking-wide">Blastoise</h1>

                            <div className="w-full h-36 mt-10">
                              <p>This is a sample description. This is a sample description. This is a sample description.
                                This is a sample description. This is a sample description. This is a sample description.
                              </p>
                            </div>

                            <div className="w-full mt-10">
                              <h2 className="font-bold mb-5">Evolution</h2>
                                <div className="w-4/5 flex items-center justify-between">
                                  <img src="/images/3d-images/squirtle.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/wartortle.png" alt="" className="w-16 h-16 object-cover" />
                                  <img src="/images/3d-images/blastoise.png" alt="" className="w-16 h-16 object-cover" />
                                </div>
                            </div>
                        </div>

                      </div>

                      <div className="lg:flex-[0_0_40%] lg:max-w-[40%] md:flex-[0_0_50%] md:max-w-[50%] flex-[0_0_100%] max-w-[100%]">
                        <div className="w-full h-full flex flex-col items-center justify-center p-8">
                            <img src="/images/3d-images/blastoise.png" alt="" className="w-full h-full object-contain"/>
                            <h1 className="font-bold text-2xl tracking-wide mt-5 lg:hidden block">Blastoise</h1>
                        </div>
                      </div>

                      <div className="flex-[0_0_30%] max-w-[30%] lg:block hidden">
                        <div className="w-full h-[500px] text-left p-8">

                          <div className="w-full mb-5">
                            <h1 className="text-lg font-semibold mb-5">Type</h1>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full tryWater">

                              </div>
                            </div>
                          </div>

                          <div className="w-full mb-10">
                            <h1 className="text-lg font-semibold mb-5">Weakness</h1>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full tryGrass"></div>
                              <div className="w-8 h-8 rounded-full tryElectric"></div>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Hp:</span>
                              <progress className="progress w-56" value={0} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Atk:</span>
                              <progress className="progress w-56" value={25} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Def:</span>
                              <progress className="progress w-56" value={50} max="100"></progress>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2 mb-2">
                              <span className="text-sm">Spd:</span>
                              <progress className="progress w-56" value={75} max="100"></progress>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              

              </Swiper>

              <div className="w-full absolute z-10 -bottom-14 justify-between lg:flex hidden">
                <div className="flex flex-col">
                  <span>Prev</span>
                  <button className="btn bg-transparent border-0 hover:bg-transparent text-2xl" onClick={() => swiperRef.current.slidePrev()}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
                </div>
                
                <div className="flex flex-col">
                  <span>Next</span>
                  <button className="btn bg-transparent border-0 hover:bg-transparent text-2xl" onClick={() => swiperRef.current.slideNext()}><FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="h-[100vh] bg-blue-500"></section>

        <Footer />
        
      </main>
    );
}

export default Games;