import Header from "./Header";
import { useState } from "react";
const Login =() =>{

    const [isSignInForm,setisSignInForm] = useState(true);


    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm);
    };
 return (
    <div>
        <Header/>
        <div className="absolute">
            <img className=" object-fill h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg"/>
        </div>

        <form className="w-4/12 absolute p-12 bg-black my-32  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>)}

            <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>

            <input type="text" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>

            <button className="p-4 my-6 bg-red-700 w-full rounded-lg border-white">{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className=" cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
                </p>

        </form>
    </div>
 );
};

export default Login;