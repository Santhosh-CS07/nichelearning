import React, { useState } from 'react';
import axios from "axios";

import './App.css';

function App() {
  const [fname, setFname] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  let data = {
    fname: fname,
    subject: subject,
    email: email,
    number: number
  }
  const addData = (e) => {
    e.preventDefault();
    axios.post("https://niche-94e5a-default-rtdb.firebaseio.com", data).then(() => alert("Data is submitted"));
  }
  return (
    <div className="App">
      <header className="App-header">
        AWARE THECHNOLOGIES, PURPOSE, AND PLAN TO ACHIEVE BIG THINGS AS A SOFTWARE ENGINEER
      </header>
      <div>
        <h2> Let's Learn what skills required for Software Jobs for <span className='free'>FREE</span></h2>
      </div>
      <div className='image'>
        <img src='NicheLearning.png' alt="NicheLearning" height="500px" width="500px" />
        <form>
          <div className="title">
            <i className="fas fa-pencil-alt"></i>
            <h2>Register here for<span className='free'> FREE 1 WEEK LIVE CLASSES</span></h2>
          </div>
          <div className="info">
            <input className="fname"
              id="firstName"
              type="text"
              placeholder="Full Name"
              value={fname}
              onChange={(e) => { setFname(e.target.value) }}
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <input
              id="number"
              type="number"
              placeholder="Moble Number"
              value={number}
              onChange={(e) => { setNumber(e.target.value) }}
            />
            <input
              id="subject"
              type="text"
              placeholder="Message"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
            />
          </div>
          <button
            type="button"
            onClick={addData}
          >Submit Here</button>
        </form>
      </div>
      <div>
        <div className="image1">
          <div>
            <div className='week_plan'> 1 WEEK <span className='free'>FREE</span> LIVE CLASSES - PLAN</div>
            <div>
              <ul>
                <li>Find Your Problem</li>
                <li>Find The Technology</li>
                <li>Prepare a Best PLAN</li>
                <li>Start Learning Programming Language</li>
                <li>Create a Project Using Library</li>
                <li>Practice Interview on Live with me</li>
                <li>Know the IT Secrets to get the call and Job</li>
                <li>Web Development | C/C++ & DSA | More</li>
              </ul>
            </div>
          </div>
          <img className='img1' src='NL_Poster_01.png' alt="NicheLearning" height="500px" width="500px" />
        </div>
        <header className="final">
          THIS WEEK WILL CHANGE YOUR LIFE for <span className='free'>100%</span>
        </header>
      </div>
      <footer>
        &#169;2022 | created by <a href='www.nichelearning.com'>nichelearning.com</a>
      </footer>
    </div>
  );
}

export default App;
