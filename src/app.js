import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
// import Grocery from "./components/Grocery";


import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


const Grocery = lazy(()=> import("./components/Grocery"))
 
//creating total app layout
const Applayout = () =>{
    
    return (
        <div className="App">
            {Header()}
            <Outlet/>
        </div>
    );
};

const approuter = createBrowserRouter([
    {
        path : "/",
        element :<Applayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <ContactUs/>, 
            },
            {
                path : "/cart",
                element : <Cart/>,
            },
            {
                path : "/restaurents/:resId",
                element : <RestaurentMenu/>,
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>until the grocery bundle loads this statement will ge seen</h1>}><Grocery/></Suspense>,
            }
        ] ,
        errorElement : <Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {approuter}/> )

