import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import React from "react";
import { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const Navbar = ({ }) => {
  
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  

  // const handleFilter = (event) =>{
  //   const searchWord = event.target.value;
  //   setwordEntered(searchWord);
  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });
  //   if (searchWord ===""){
  //     setFilteredData([])
  //   }else{
  //   setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setwordEntered("")
  // }
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  
  return (
    <div className="navbar" >
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>marioSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search" >
        {/* {filteredData.length === 0 ? <SearchOutlinedIcon /> : <CloseOutlinedIcon id="clearBtn" onClick={clearInput}/>} */}
          
          <input 
          className="search2" 
          placeholder="Que quieres encontrar..." 
          type="text"
          // value={wordEntered}
          // onChange={handleFilter}
          />
        </div>
        {/* {filteredData.length !== 0 && (
          <div className="dataResult">
          {filteredData.slice(0,15).map((value, key) =>{
            return (
            <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
             <p>{value.title}</p>
            </a>);
          })}
        </div>
        )} */}
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
