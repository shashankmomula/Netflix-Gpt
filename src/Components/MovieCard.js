import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({BackDrop}) =>{
    return(
        <div className="w-52 pr-4">
            <img alt="Movie card" src={IMG_CDN_URL + BackDrop}/>
        </div>
    );
};

export default MovieCard;