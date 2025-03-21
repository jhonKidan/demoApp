import React from 'react'
// import usestate from react to handle state
import { useState } from 'react'

function AddEmployee() {

// declare state variables for each of the form fields
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

//write a function to handle the form submission
  function handleSubmit(event){
    event.preventDefault();
    // prepate the data to be sent to the server
    const data={
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    // send the data to the server

    const apiUrl = 'http://localhost:9000/add-employee';
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    const response = fetch(apiUrl, requestOptions)
   .response.then(res=>res.json())
   .then(res=>{
    console.log(res);
   });
  }

  return (
    <>
      <div>
        
     <h1>Add Employee</h1>
     <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value={firstName} onChange={event=>setFirstName(event.target.value)}/><br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value={lastName} onChange={event=>setLastName(event.target.value)}/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email" value={email} onChange={event=>setEmail(event.target.value)}/><br/>
       
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" name="password" value={password} onChange={event=>setPassword(event.target.value)}/><br/>
       
        <button type="submit">Submit</button>

     </form>
        
    </div>
    </>
  )
}

export default AddEmployee