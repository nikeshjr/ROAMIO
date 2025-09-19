import { useState } from 'react'
import { ArrowLeftIcon } from "lucide-react";
import './Add.css'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
function Add() {
  const items={
    name: "",
  map: "",
  description: "",
  state: "",
  district: "",
  image: null,
 };
 const [item,setitem] = useState(items);
     const navigate = useNavigate();

     const inputHandler= (e) =>{
      const {name, value, files}= e.target
      if (name === "image") {
        setitem({ ...item, image: files[0] });
      } else {
        setitem({ ...item, [name]: value });
      }
          
     };

  const submitForm=async(e)=>{
    if (!item.name || !item.map || !item.description || !item.state || !item.district || !item.image) {
      alert("Please fill out all fields");
      return;
    }
    
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("maplink", item.map);
    formData.append("description", item.description);
    formData.append("State", item.state);
    formData.append("District", item.district);
    formData.append("image", item.image);  

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ': ' + pair[1]);
    }
    
  
    try {
      const response = await axios.post("http://localhost:8000/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("User created successfully", response);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
      }
    }
 }

  return (
    <div className='container'>
    <div className="addUser" onSubmit={submitForm}>
     <Link to="/" className="custom-button back-button" aria-label="Go back" type="button"><ArrowLeftIcon className="back-button-icon" /></Link>
   <h3>Add a new gem</h3>
   <form className="addUserForm">
    <div className="inputGroup">
        <label htmlFor="name">Name of the place:</label>
        <input type="text" id="name" 
        onChange={inputHandler}
        name="name" autoComplete="off" placeHolder="Enter the place"></input>
    </div>
    <div className="inputGroup">
        <label htmlFor="image">Image file:</label>
        <input type="file" name="image" onChange={inputHandler}></input>
    </div>
    <div className="inputGroup">
    <label htmlFor="map">Map Link for the place:</label>
        <input type="text" id="name" 
        onChange={inputHandler}
        name="map" autoComplete="off" placeHolder="Paste the link"></input>
    </div>
    <div className="inputGroup">
    <label htmlFor="map">Describe the place:</label>
        <input type="text" id="name" 
        onChange={inputHandler}
        name="description" autoComplete="off" placeHolder="About the place"></input>
    </div>
 <div className="inputGroup">
    <label for="state">Choose the State where the gem is located:</label>
    <select id="state" name="state"  onChange={inputHandler}>
    <option value="">-- Select State --</option>
      <option value="TamilNadu">TamilNadu</option>
    </select>
    </div>
    <div className="inputGroup">
    <label for="district">Choose the District where the gem is located:</label>
    <select id="district" name="district"   onChange={inputHandler}>
    <option value="">-- Select District --</option>
      <option value="Madurai">Madurai</option>
      <option value="Kanyakumari">Kanyakumari</option>
      <option value="Sivagangai">Sivagangai</option>
      <option value="Tirunelveli">Tirunelveli</option>
      <option value="Toothukudi">Toothukudi</option>
      <option value="Tenkasi">Tenkasi</option>
      <option value="Virudhunagar">Virdhunagar</option>
      <option value="Ramanathapuram">Ramanathapuram</option>
      <option value="Theni">Theni</option>
      <option value="Dindigul">Dindigul</option>
      <option value="Pudukkottai">Pudukkottai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Tiruppur">Tiruppur</option>
      <option value="Karur">Karur</option>
      <option value="Tiruchirapalli">Tiruchirappalli</option>
      <option value="Thanjavur">Thanjavur</option>
      <option value="Tiruvarur">Tiruvarur</option>
      <option value="Nagapattinam">Nagapattinam</option>
      <option value="Karaikal">Karaikal</option>
      <option value="Mayiladuthurai">Mayiladuthurai</option>
    </select>
    </div>
    <div className="inputGroup">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
   </form>
    </div>
    </div>
  )
}

export default Add
