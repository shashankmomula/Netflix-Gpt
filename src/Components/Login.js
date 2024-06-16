import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { CheckValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login =() =>{

    const [isSignInForm,setisSignInForm] = useState(true);
    const [errormessage,seterrormessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    
    const handleButtonClick = () =>{
        //validate the form data
    const message = CheckValidData(email.current?.value,password.current?.value,name.current?.value);
    seterrormessage(message);
        if(message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                const user = userCredential.user;
                // navigate("/browse");
                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL: {USER_AVATAR}
                })
                  .then(() => {
                    const { uid, email, displayName} = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: "https://occ-0-3215-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                      })
                    );
                  })
                  .catch((error) => {
                    seterrormessage(error.message);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrormessage(errorCode + "-" + errorMessage);
              });
          } else {
            // Sign In Logic
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                
                // navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrormessage(errorCode + "-" + errorMessage);
              });
          }
        };
        const toggleSignInForm = () => {
            setisSignInForm(!isSignInForm);
          };
 return (
    <div>
        <Header/>
        <div className="absolute">
            <img className=" object-fill h-full w-full" src={BG_URL}/>
        </div>

        <form onSubmit={(e)=> e.preventDefault()}
            className="w-4/12 absolute p-12 bg-black my-28  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

    {!isSignInForm && (
        <input ref={name}type="text" placeholder="Full Name" 
        className="p-4 my-2 w-full bg-gray-700 rounded-md"
        />)
    }

        <input 
            ref={email}
            type="text" placeholder="Email Address" 
            className="p-4 my-2 w-full bg-gray-700 rounded-md"
        />

        <input ref={password} 
               type="text" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded-md"
        />
            <p className="text-red-500">{errormessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg border-white" 
                onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className=" cursor-pointer"
            onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
        </p>

        </form>
    </div>
 );
};

export default Login;