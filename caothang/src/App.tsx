import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Basic01 from "./components/HomeWork02/Basic01/Basic01";
import Basic02 from "./components/HomeWork02/Basic02/Basic02";
import Basic03 from "./components/HomeWork02/Basic03/Basic03";
// import imagebasic from "./1.jpg";
// import imagebasic2 from "./2.jpg";
import Index from "./components/HomeWork02/Basic-ui-1/Index";
import Index_ui2 from "./components/HomeWork02/Basic-ui-2/Index_ui2";
import * as reactStyle from 'react-icons/ai';
import * as reactStyle3 from "react-icons/fa";
import Index_ui3 from "./components/HomeWork02/Basic-ui-3/Index-ui3";
 import LikeButton from "./components/HomeWork03/LikeButton/LikeButton";
 import * as Icons_button from "react-icons/ai";
import Alth1 from "./components/Giai_thuat/Alth1";
import Index_ex from "./components/Exp_userEffect/Index";
import Index_like from "./components/Exp_userEffect/Index_like";
import Like_Button from "./components/HomeWork03/LikeButton/LikeButton";

import ImageView from "./components/HomeWork03/ImageView/ImageView";
import * as Style_icon from "react-icons/gr";
import Rating_star from "./components/HomeWork03/Rating_star/Rating_star";
import ListUser from "./components/Exp_networking/ListUser";
function App() {
  // let myIcons = <reactStyle.Fa500Px />;
  let isLike = false;
  return (
    <>

     {/* < Bai_tap1 /> */}

      {/* <Basic01 /> */}

      {/* <Basic02 /> */}

      {/* <Basic03 /> */}

    {/* <Index text="BANDWIDTH" color1="#e74c3c" color2="red" percentage={40}/>
    <Index text="STORAGE" color1="#2980b9" color2="blue" percentage={30}/>
    <Index text="USER" color1="#27ae60" color2="#2ecc71" percentage={60}/>
    <Index text="VISITOR" color1="#f1c40f" color2="yellow" percentage={50}/>
    <Index text="EMAIL" color1="#2980b9" color2="blue" percentage={80}/> */}

    
    {/* <Index_ui2  nameComponent = "html" color = "#4cd137" percent ={40}  icon = {<reactStyle.AiFillAndroid/>} iconColor="green" /> 
    <Index_ui2  nameComponent = "CSS" color = "red" percent ={60}  icon = {<reactStyle.AiFillApple/>}  iconColor="red" /> 
    <Index_ui2  nameComponent = "PHP" color = "#045a81" percent ={20}  icon = {<reactStyle.AiFillBuild/>}  iconColor="blue" /> 
    <Index_ui2  nameComponent = "JAVA" color = "#cdf00b" percent ={85} icon = {<reactStyle.AiFillBook/>}  iconColor="yellow" />  */}

    {/* <Index_ui3 color="#487eb0" icons={<reactStyle3.FaFacebookF />}  channel="Facebook" interract="5500 likes" />
    <Index_ui3 color="#00d2d3" icons={<reactStyle3.FaTwitter />}  channel="Twitter" interract="40000 Tweets" />
    <Index_ui3 color="#ff9f43" icons={<reactStyle3.FaGooglePlusG />}  channel="Google +" interract="40000 Search" />
    <Index_ui3 color="#ff6b6b" icons={<reactStyle3.FaPinterest />}  channel="Pinterest" interract="50000 Search" />
         */}
          
         {/* <LikeButton Button_like={<Icons_button.AiFillLike />}/> */}
         {/* <Alth1 /> */}

         {/* <Index_ex/> */}
         {/* <Index_like /> */}
         {/* <Like_Button icon_like={<Icons_button.AiFillLike/>} icon_dislike={<Icons_button.AiOutlineDislike/>} /> */}
         {/* <Rating_star /> */}
         {/* <ImageView icon_next={<Style_icon.GrCaretNext/>} icon_privious={<Style_icon.GrCaretPrevious/>} /> */}
         {/* <Rating_star /> */}
         <ListUser/>
    </>
  );
}

export default App;
