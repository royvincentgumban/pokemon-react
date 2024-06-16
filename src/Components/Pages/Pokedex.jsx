import React, { useEffect, useState } from 'react';
import Loading from "../Utilities/Loading";
import Footer from "../Utilities/Footer";

import "../style.css";

import { motion } from "framer-motion";
import axios from 'axios';

const Pokedex = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedWeakness, setSelectedWeakness] = useState('');
  const [sortOrder, setSortOrder] = useState('lowestNum');

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data');
      setPokemonList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredPokemon = pokemonList
  .filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatch = selectedType === '' || pokemon.type.includes(selectedType);
    const weaknessMatch = selectedWeakness === '' || pokemon.weakness.includes(selectedWeakness);

    return nameMatch && typeMatch && weaknessMatch;
  })
  .sort((a, b) => {
    if (sortOrder === 'ascending' || sortOrder === 'descending') {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === 'ascending') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    } else if (sortOrder === 'lowestNum' || sortOrder === 'highestNum') {
      const numA = a.number;
      const numB = b.number;

      if (sortOrder === 'lowestNum') {
        return numA - numB;
      } else {
        return numB - numA;
      }
    } else {
      return 0;
    }
  })

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedWeakness('');
    setSortOrder('lowestNum');
  };

  const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleWeaknessChange = (event) => {
    setSelectedWeakness(event.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };



  const getWeaknessType = (weakness) => {
    switch (weakness) {
      case "Grass":
        return "grassIcon";
      case "Water":
        return "waterIcon";
      case "Fire":
        return "fireIcon";
      case "Electric":
        return "electricIcon";
      case "Flying":
        return "flyingIcon";
      case "Ghost":
        return "ghostIcon";
      case "Poison":
        return "poisonIcon";
      case "Normal":
        return "normalIcon";
      case "Ice":
        return "iceIcon";
      case "Steel":
        return "steelIcon";
      case "Ground":
        return "groundIcon";
      case "Dragon":
        return "dragonIcon";
      case "Fighting":
        return "fightingIcon";
      case "Rock":
        return "rockIcon";
      case "Bug":
        return "bugIcon";
      case "Dark":
        return "darkIcon";
      case "Psychic":
        return "psychicIcon";
      case "Fairy":
        return "fairyIcon";

      default:
        return "hidden";
    }
  }


  const getType = (type) => {
    switch (type) {
      case "Grass":
        return "bg-[#7c5]";
      case "Water":
        return "bg-[#39f]";
      case "Fire":
        return "bg-[#f42]";
      case "Electric":
        return "bg-[#fc3]";
      case "Flying":
        return "bg-[#89f]";
      case "Ghost":
        return "bg-[#66b]";
      case "Poison":
        return "bg-[#a59]";
      case "Normal":
        return "bg-[#aa9]";
      case "Ice":
        return "bg-[#6cf]";
      case "Steel":
        return "bg-[#aab]";
      case "Ground":
        return "bg-[#db5]";
      case "Dragon":
        return "bg-[#76e]";
      case "Fighting":
        return "bg-[#b54]";
      case "Rock":
        return "bg-[#ba6]";
      case "Bug":
        return "bg-[#ab2]";
      case "Dark":
        return "bg-[#754]";
      case "Psychic":
        return "bg-[#f59]";
      case "Fairy":
        return "bg-[#e9e]";
      default:
        return "hidden";
    }
  };
  
  


  return (
    <main>

      <section className="min-h-screen relative">
        <div className="max-w-[1400px] min-h-screen overflow-hidden m-auto">
          <div className="flex flex-wrap items-center justify-center p-8">
             <motion.div
              className="w-1/2 leading-normal mb-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              >
              <h2 className="font-bold text-5xl uppercase mb-5"> Pokedex </h2>
              <p>
                Each Pokémon possesses unique abilities and characteristics,
                ready to accompany you through thrilling battles and captivating
                adventures.
              </p>
            </motion.div>

            <div className="w-full h-full flex items-center justify-end p-4">
              <div className="w-full h-full lg:w-1/2">
                <label className="input flex items-center justify-center gap-2 rounded bg-white shadow">
                  <input type="text" className="grow"  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  />

                  {/* <button className="btn h-8 min-h-8 p-2 rounded bg-red-500 hover:bg-[#222224]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
                        fill="#fff"
                      />
                      <path
                        d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
                        fill="#fff"
                      />
                      <path
                        d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
                        fill="#fff"
                      />
                    </svg>
                  </button> */}
                </label>
              </div>
            </div>


            <div className="w-full flex items-center mb-4">

              <div className="w-full p-4 flex items-center justify-start gap-4 mb-4 ">
                <select className="select shadow w-32 max-w-xs border-0 outline-0 focus:shadow focus:border-0 focus:outline-0 focus:outline-offset-0" 
                 onChange={handleSortChange}
                 value={sortOrder}
                >
                  <option value="lowestNum">Lowest</option>
                  <option value="highestNum">Highest</option>
                  <option value="ascending">Ascending</option>
                  <option  value="descending">Descending</option>
                </select>
              </div>

            
              <div className="w-full p-4 flex items-center justify-end gap-4 mb-4">
              <select
                className="select shadow w-32 max-w-xs border-0 outline-0 focus:shadow focus:border-0 focus:outline-0 focus:outline-offset-0"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="" disabled>Type</option>
                {[
                  'Grass', 'Water', 'Fire', 'Electric', 'Flying', 'Ghost', 'Poison',
                  'Normal', 'Ice', 'Steel', 'Ground', 'Dragon', 'Fighting', 'Rock',
                  'Bug', 'Dark', 'Psychic', 'Fairy'
                ].map((type, index) => (
                  <option key={index}>{type}</option>
                ))}
              </select>

                <select className="select shadow w-32 max-w-xs border-0 outline-0 focus:shadow focus:border-0 focus:outline-0 focus:outline-offset-0"
                  value={selectedWeakness}
                  onChange={handleWeaknessChange}
                >
                  <option value="" disabled>Weakness</option>
                {[
                  'Grass', 'Water', 'Fire', 'Electric', 'Flying', 'Ghost', 'Poison',
                  'Normal', 'Ice', 'Steel', 'Ground', 'Dragon', 'Fighting', 'Rock',
                  'Bug', 'Dark', 'Psychic', 'Fairy'
                ].map((type, index) => (
                  <option key={index}>{type}</option>
                ))}
                </select>

                <select className="select shadow w-32 max-w-xs border-0 outline-0 focus:shadow focus:border-0 focus:outline-0 focus:outline-offset-0">
                  <option value="" disabled >Weight</option>
                  <option>1</option>
                  <option>2</option>
                </select>

                <select className="select shadow w-32 max-w-xs border-0 outline-0 focus:shadow focus:border-0 focus:outline-0 focus:outline-offset-0">
                  <option value="" disabled>Height</option>
                  <option>1</option>
                  <option>2</option>
                </select>

                <button className="btn h-10 w-10 min-h-8 p-2 rounded bg-red-500 hover:bg-[#222224]"
                  onClick={resetFilters}
                >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
                        fill="#fff"
                      />
                      <path
                        d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
                        fill="#fff"
                      />
                      <path
                        d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
                        fill="#fff"
                      />
                    </svg>
                </button>

              </div>

            </div>



          {isLoading ? (
              <Loading />
            ) : (
            filteredPokemon.length > 0 ? (
            
              filteredPokemon.map((items, index) => (
                
                <div className="pokedex-container" key={index}>
                  
                  <div className={`pokedex-item w-full h-80 p-8 bg-white rounded-box shadow-md ${
                      items.identifier === "Grass" ? "hover:bg-gradient-to-t from-transparent to-[#7c5]" : 
                      items.identifier === "Fire" ? "hover:bg-gradient-to-t from-transparent to-[#f42]" :
                      items.identifier === "Water" ? "hover:bg-gradient-to-t from-transparent to-[#39f]" :
                      items.identifier === "Electric" ? "hover:bg-gradient-to-t from-transparent to-[#fc3]" :
                      items.identifier === "Flying" ? "hover:bg-gradient-to-t from-transparent to-[#89f]" :
                      items.identifier === "Ghost" ? "hover:bg-gradient-to-t from-transparent to-[#66b]" :
                      items.identifier === "Bug" ? "hover:bg-gradient-to-t from-transparent to-[#ab2]" :
                      ""
                  }`}
                  
                  >
                    <div className="w-full h-10 relative">
                      <div className="w-full h-full flex items-center justify-center absolute -top-10">
                        <img src={`/images/sprites/gif/${items.image}`} alt={items.name} className="" />
                      </div>


                    </div>

                    <div className="pokemon-data leading-normal">
                      <h2 className="text-sm font-bold mb-2">#{items.number} </h2>
                      <h3 className="text-base font-bold mb-2">{items.name}</h3>
                      <h4 className="text-sm">{items.species}</h4>
                    </div>

                    <div className="w-full flex gap-2 mt-5">
                      {items.type.split(' ').map((type, idx) => (
                        <div
                          key={idx}
                          className={`w-full h-full rounded ${getType(type)}`}
                        >
                          <p className="text-xs p-2 font-bold uppercase text-white">
                            {type}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="w-full h-5 mt-10 flex items-center justify-center">
                      <button
                        className="px-2 py-2 rounded-full bg-red-500"
                        onClick={() =>
                          document.getElementById(items.number).showModal()
                        }
                        >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                          <path
                            d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
                            fill="#fff"
                          />
                          <path
                            d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
                            fill="#fff"
                          />
                          <path
                            d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                    </div>


                    <dialog id={items.number} className="modal p-4">
                      <div className="modal-box text-left w-full h-full max-w-lg overflow-visible px-8">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div className="flex flex-col items-center w-full h-96 p-2 mt-3 mb-3 relative">
                          <div className="w-32 h-32 absolute -top-16 ">
                            <img
                              src={`/images/sprites/${items.modal_img}`}
                              alt={items.name}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="w-full h-full mt-20 text-center">
                            <div className="w-full leading-loose mb-3">
                              <p className="text-sm font-extrabold">
                                #{items.number}
                              </p>
                              <h2 className="text-lg font-bold">{items.name}</h2>
                            </div>

                            <div className="w-full text-sm mb-5">
                              <p>{items.entry}</p>
                            </div>

                            <div className="w-full flex items-center justify-center">
                              <div className="w-1/2 text-xs mb-4">
                                <h1 className="font-bold uppercase"> Weight </h1>
                                <p className="py-1 px-2 text-sm font-semibold">{items.weight} m</p>
                              </div>
                              <div className="w-1/2 text-xs mb-4">
                                <h1 className="font-bold uppercase"> Height </h1>
                                <p className="py-1 px-2 text-sm font-semibold">{items.height} kg</p>
                              </div>
                            </div>

                            <div className="w-full h-auto flex items-center justify-center mb-4">
                              <div className="w-full font-semibold text-xs">
                                <h1 className="font-bold uppercase mb-2">Weakness</h1>

                                <div className="flex items-center justify-center gap-2 py-1 px-2">
                                {items.weakness.split(' ').map((weakness, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-7 h-7 rounded-full ${getWeaknessType(weakness)}`}
                                  >
                                  </div>
                                ))}
                              </div>


                              </div>

                            </div>

                            <div className="w-full text-base font-semibold mb-5">
                              <h1 className="font-bold uppercase mb-2 text-[0.75em]">Stats</h1>
                              <div className="flex items-center justify-center gap-2 py-1 px-2">
                                
                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#7c5] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Hp</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.hp} </p>
                                </div>


                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#f42] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Atk</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.atk} </p>
                                </div>

                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#aab] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Def</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.def} </p>
                                </div>


                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#39f] flex items-center justify-center text-white mb-2 text-[0.65em]">
                                    <p>SpA</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.spAtk} </p>
                                </div>

                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#f59] flex items-center justify-center text-white mb-2 text-[0.65em]">
                                    <p>SpD</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.spDef} </p>
                                </div>

                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#fc3] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Spd</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.spd} </p>
                                </div>

                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#aa9] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Tot</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.total} </p>
                                </div>

                                <div className="flex flex-col">
                                  <div className="w-7 h-7 rounded-full bg-[#754] flex items-center justify-center text-white mb-2 uppercase text-[0.65em]">
                                    <p>Exp</p>
                                  </div>
                                  <p className="font-bold text-[0.75em]"> {items.exp} </p>
                                </div>

                              </div>
                            </div>

                            <div className="w-full">
                              <h1 className="uppercase mb-2 text-xs font-bold">Evolution</h1>

                              <div className="w-full h-14 flex items-center justify-between gap-4">
                                  <img src={`/images/sprites/${items.firstEvo}`} alt="" className="w-full h-full object-contain" />
                                  <p className="w-full border border-[#222224] rounded-full text-xs font-semibold capitalize py-1"> {items.first_evolution} </p>
                                  <img src={`/images/sprites/${items.secondEvo}`} alt="" className="w-full h-full object-contain" />
                                  <p className="w-full border border-[#222224] rounded-full text-xs font-semibold capitalize py-1"> {items.second_evolution}  </p>
                                  <img src={`/images/sprites/${items.finalEvo}`} alt="" className="w-full h-full object-contain" />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>


                </div>
              ))
              ) : (
                <p className='font-medium text-[#222224] mt-10'>
                    {searchQuery ? (
                    <>
                      No Pokémon found matching <span className='font-bold'> "{searchQuery}" </span>
                    </>
                  ) : selectedType ? (
                    <>
                      No Pokémon found for type <span className='font-bold'> "{selectedType}" </span>
                    </>
                  ) : selectedWeakness ? (
                    <>No Pokémon found for weakness <span className='font-bold'> "{selectedWeakness}" </span> </>
                  ) : (
                    <> No Pokémon found </>
                  )
                
                }
                </p>
              )
            )}
          </div>
        </div>
      </section>


    <Footer />

    </main>
  );
};

export default Pokedex;
