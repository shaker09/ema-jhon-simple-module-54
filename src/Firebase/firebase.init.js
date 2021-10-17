import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication 
---------

Step 1: Initial Steps:-

1. firebase: create project 
2. create web app
3. got configuration 
4. initialize firebase 
5. enable auth method 
-------------
step 2:steup components:-

1. create login component 
2. create register component
3. create route for login and register 
------------
step 3: set auth system:-

1. setup sign in method 
2. setup sign out method 
3. user state 
4. special observer 
5. return necessary methods and states form useFirebase

-----------
step 4: create auth context hook (useAuth):-

1. create a auth contex 
2. create contex provider
3. set context provider context value 
3. use Auth provider
4. create useAuth Hook
-----------
step 5: create private route:-

1. Create private Route
2. set private route 
----------------

step 6: redirect after login:-

1. after login redirect user to their desire destination 

*/