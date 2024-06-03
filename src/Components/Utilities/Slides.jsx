import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import '../style.css';

import bulbasaur from "../../Assets/img/3d-images/bulbasaur.png";
import squirtle from "../../Assets/img/3d-images/squirtle.png";
import charmander from "../../Assets/img/3d-images/charmander.png";
import pikachu from "../../Assets/img/3d-images/pikachu.png";
import pidgey from "../../Assets/img/3d-images/pidgey.png";
import gastly from "../../Assets/img/3d-images/gastly.png";

// import required modules
import {EffectCoverflow } from 'swiper/modules';

const PokemonList = [
    { name:"Bulbasaur", type: "Grass", image: bulbasaur },
    { name:"Squirtle", type: "Water", image: squirtle },
    { name:"Charmander", type: "Fire", image: charmander },
    { name:"Pikachu", type: "Electric", image: pikachu },
    { name:"Pidgey", type: "Flying", image: pidgey },
    { name:"Gastly", type: "Ghost", image: gastly },
]

export default function App() {
  return (
    <>
      <Swiper
       effect={'coverflow'}
        slidesPerView={3}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -55,
          depth: 95,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        loop
        >
        {PokemonList.map ((slidesContent, index) => (


        <SwiperSlide key={index} className='shadow-md'>

            {({ isActive }) => (
                <div className={`w-full h-full flex flex-col items-center justify-center gap-y-4 ${
                isActive ? 'opacity-100 font-bold' : 'opacity-50'
            }`}
             >

              <img src={slidesContent.image} alt="" className="w-32 h-32 object-cover" />
              <h1>{slidesContent.name}</h1>
              </div>
              
            )}

        </SwiperSlide>

       ))}
       
      </Swiper>
    </>
  );
}
