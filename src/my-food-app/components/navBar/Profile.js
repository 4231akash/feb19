import React, { useState } from "react";
import "./navBar.css";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import BackDrop from "./BackDrop";
import Footer from "../footer/Footer";
const Profile = () => {
  let [data, setData] = useState("");
  let [data1, setData1] = useState("");

  const history = useHistory();

  var Name =
    sessionStorage.getItem("firstName") +
    " " +
    sessionStorage.getItem("lastName");
  var Email = sessionStorage.getItem("Email");
  var number = sessionStorage.getItem("contact");
  var location = sessionStorage.getItem("address");

  function pencil2() {
    return alert("its default value don't change");
  }
  function pencil3() {
    return alert("its default value don't change");
  }

  function pencil() {
    var person = prompt("enter your contact", "hello");

    // let person2 = prompt("enter your contact", Email);

    if (person != null) {
      sessionStorage.setItem("contact", person);
      var contact = sessionStorage.getItem("contact");
      return setData(contact);
    }
  }
  function pencil1() {
    var person1 = prompt("enter your address", "hello");

    if (person1 != null) {
      sessionStorage.setItem("address", person1);
      var address = sessionStorage.getItem("address");
      return setData1(address);
    }
  }
  function logout() {
    sessionStorage.removeItem("token");
    return history.push("/login");
  }
  function save() {
    return alert("your profile is updated");
  }
  const [sidebar, setsidebar] = useState(false);
  const toggleBar = () => {
    setsidebar((prev) => !prev);
  };
  return (
    <div>
        <div>
        <NavBar className="nav" OpenSideBar={toggleBar} />
        <SideBar Sidebar={sidebar} />
        <BackDrop Sidebar={sidebar} CloseToggle={toggleBar}/>
      </div>
    <div id="view">
     
      <div id="profile">
      
        <div id="edit">
          <h3>Edit profile</h3>
          <img
            src={"http://localhost:3000/Profile.png"}
            alt="hi"
            className="profileImg"
          ></img>
          <div></div>
        </div>
        <div id="details">
          <p className="profile">Name: </p>
          <p className="profileShow">
            <span>{Name}</span>
            <span className="profileShow1" onClick={pencil2}>
              <i class="ri-pencil-fill"></i>
            </span>
          </p>
          <p className="profile">Email Address: </p>
          <p className="profileShow">
            <span>{Email}</span>
            <span className="profileShow1" onClick={pencil3}>
              <i class="ri-pencil-fill"></i>
            </span>
          </p>
          <p className="profile">Contact Number:</p>
          <p className="profileShow">
            <span>{(data = " " ? number : data)}</span>
            <span className="profileShow1" onClick={pencil}>
              <i class="ri-pencil-fill"></i>
            </span>
          </p>
          <p className="profile">Address:</p>
          <p className="profileShow" onClick={pencil1}>
            <span>{(data1 = " " ? location : data1)}</span>
            <span className="profileShow1">
              <i class="ri-pencil-fill"></i>
            </span>
          </p>
          <div id="profileBtn">
            <button type="button" id="update" onClick={save}>
              Save
            </button>
            <button type="button" id="log" onClick={logout}>
              log out
            </button>
          </div>
        </div>
      </div>
    </div>
  
    </div>
  );
};

export default Profile;
