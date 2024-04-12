import {  createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { CheckValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {auth} from "../utils/firebase";
const Login =() =>{

    const [isSignInForm,setisSignInForm] = useState(true);
    const [errormessage,seterrormessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    console.log(email);
    const handleButtonClick = () =>{
        //validate the form data
    const message = CheckValidData(email.current?.value,password.current?.value,name.current?.value);
    seterrormessage(message);
        if(message) return;

        if(!isSignInForm){
            //Sign Up Form
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ errorMessage)
  });
        }
        else{
            //Sign In
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
  });
        }

        
       
    }
        const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm);
    };
 return (
    <div>
        <Header/>
        <div className="absolute">
            <img className=" object-fill h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"/>
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