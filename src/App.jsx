import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/mygigs/MyGigs";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import "./app.scss"

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const cld = new Cloudinary({
  cloud:{
    cloudName: "dr5kn8993"
  }
})


function App() {
  const Layout = () => {
return(
  <div className="app">
   <Navbar />
   <Outlet />
   <Footer /> 
  </div>
)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      {
      path: "/",
      element: <Home/>
      },
      {
      path: "/gigs",
      element: <Gigs/>
      },
      {
      path: "/gig/:id",
      element: <Gig/>
      },
      {
      path: "/orders",
      element: <Orders/>
      },
      {
      path: "/mygigs",
      element: <MyGigs/>
      },
      {
      path: "/add",
      element: <Add/>
      },
      {
      path: "/messages",
      element: <Messages/>
      },
      {
      path: "/message/:id",
      element: <Message/>
      },
      ]
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App