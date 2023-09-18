import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewCar from "../pages/NewCarForm"

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const LOGGED_HOME_PATH = "/loggedHome"
export const NEW_CAR_PATH = "/newCar"

export const navbarLinks = [
     {title:"Login",  path:LOGIN_PATH},
     {title:"Home", path:HOME_PATH}, 
];

export const routes =[
     {path:HOME_PATH,  Component: Home},
     {path:LOGIN_PATH,  Component: Login},
     {path:REGISTER_PATH,  Component: Register},
     {path:NEW_CAR_PATH, Component: NewCar}
];