import React from "react";
import "../style.css";


const Loading = () => {


    return (
        <div className="flex flex-wrap items-center justify-center w-full">
            <div className="pokedex-container">
                <div className="pokedex-item skeleton">

                </div>
            </div>
            <div className="pokedex-container">
                <div className="pokedex-item skeleton">

                </div>
            </div>
            <div className="pokedex-container">
                <div className="pokedex-item skeleton">

                </div>
            </div>
            <div className="pokedex-container">
                <div className="pokedex-item skeleton">

                </div>
            </div>
        </div>
    );

}
export default Loading;