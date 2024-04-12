export const CheckValidData = (email,Password,name) =>{
   const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const ispasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(Password);
   const isnamevalid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

   if(!isemailvalid) return "Email is invalid!";
   if(!ispasswordvalid) return "password is invalid!";
   if(!isnamevalid) return "Name is invalid!";

   return null;
};

