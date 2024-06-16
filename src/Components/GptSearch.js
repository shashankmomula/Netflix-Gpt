import { BG_URL } from "../utils/constants";
import GPtMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ()=>{
    return(
        <div>
            <div className="absolute -z-10">
            <img className=" object-fill h-full w-full" src={BG_URL}/>
        </div>
            <GptSearchBar/>
            <GPtMovieSuggetions/>
        </div>
    );
};

export default GptSearch;
