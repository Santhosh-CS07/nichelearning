import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import './App.css';

function App() {
  const [fname, setName] = useState('');
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');


  const databaseRef = collection(db, 'users');
  const handleSubmit = () => {
    addDoc(databaseRef, {
      fname: fname,
      message: message,
      email: email,
      number: number
    })
      .then(() => {
        alert("Data Submitted")
        setName('');
        setMessage('');
        setEmail('');
        setNumber(null);
      })
      .catch((err) => {
        console.error(err);
      })
  };
  return (
    <div className="container-fluid App">
      <div className='row'>
        <header className="App-header">
          AWARE THECHNOLOGIES, PURPOSE, AND PLAN TO ACHIEVE BIG THINGS AS A SOFTWARE ENGINEER
        </header>
      </div>
      <div className='row head2'>
        <h2> Let's Learn what skills required for Software Jobs for <span className='free'>FREE</span></h2>
      </div>
      <div className='container image'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src='NicheLearning.png' alt="NicheLearning" height="500px" width="500px" />
          </div>
          <div className='col-lg-6'>
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
                  onChange={(e) => { setName(e.target.value) }}
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
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
              >Submit Here</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className='container-fluid image1'>
          <div className='row'>
            <div className='col-lg-6'>
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
            </div>
            <div className='col-lg-6'>
              <img className='img1' src='NL_Poster_01.png' alt="NicheLearning" height="650px" width="600px" />
            </div>
          </div>
        </div>
        <header className="final">
          THIS WEEK WILL CHANGE YOUR LIFE for <span className='free'>100%</span>
        </header>
      </div>
      <footer>
        &#169;2022 | created by <a href='https://nichelearning.vercel.app/'>nichelearning.com</a>
      </footer>
    </div>
  );
}

export default App;
