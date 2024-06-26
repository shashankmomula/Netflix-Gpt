import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/config.Slice";


const Header = () =>{
    const navigate = useNavigate(null);
    const user = useSelector((store)=>store.user);
     const dispatch = useDispatch(null);

    const handleSignOut= ()=>{
        signOut(auth).then(() => {}).catch((error) => {
            // An error happened.
            navigate("/error")
          });
          
    };
    useEffect(()=>{
        //checking the authentication and updating tha store
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
             dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                })
            );
            navigate("/browse");
            } else {
              // User is signed out
             dispatch(removeUser());
             navigate("/");
            }
          });
          //unsubscribe when component unmounts
          return () => unsubscribe();
    },[]);
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
    };

    const handleLaguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    };
  
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className=" w-44"
             src={LOGO}
            alt="logo"/>
            {user && (
            <div className="flex p-2">
                <select className="p-2 m-4 px-4 bg-blue-950  text-white rounded-md cursor-pointer" onChange={handleLaguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} 
                        value={lang.identifier}>
                            {lang.name}
                            </option>
                        ))}
                
                </select>
                <button onClick={handleGptSearchClick}  className=" bg-blue-800 rounded-lg 
                 py-2 px-4 my-4 mx-2 text-white" >GPT Search</button>
                <img 
                className="w-12 h-12 my-4"
                alt="User Icon"
                src="https://occ-0-3215-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"/>
                <button onClick={handleSignOut} className="m-4 p-2 bg-slate-300 rounded-md font-bold">Sign Out</button>
            </div>)}
        </div>
    );
};

export default Header;