import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import './App.css';

function App() {
  const [fname, setName] = useState('');
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [referral, setReferral] = useState('');



  const databaseRef = collection(db, 'users');
  const handleSubmit = () => {
    addDoc(databaseRef, {
      fullName: fname,
      message: message,
      email: email,
      PhoneNumber: number,
      referredBy: referral
    })
      .then(() => {
        alert("Data Submitted")
        setName('');
        setMessage('');
        setEmail('');
        setReferral('');
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
          AWARE THECHNOLOGIES, PURPOSE, AND PLAN TO ACHIEVE BIG THINGS AS A <b className="free">SOFTWARE ENGINEER</b>
        </header>
      </div>
      <div className='row head2'>
        <h2> Let's Learn what skills required for Software Jobs for <span className='free'>FREE</span></h2>
      </div>
      <header className="final">
        THIS WEEK WILL CHANGE YOUR LIFE for <span className='free'>100%</span>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src='NicheLearning.png' alt="NicheLearning" />
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
                <input className="referral"
                  id="referral"
                  type="text"
                  placeholder="referred  by | Ex: santhosh"
                  value={referral}
                  onChange={(e) => { setReferral(e.target.value) }}
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                Submit Here
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className='container-fluid plan'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <div className='week_plan'> 1 WEEK <span className='free'>FREE</span> LIVE CLASSES - PLAN</div>
                <div className="min-w-7xl mx-0 md:mx-20">
                  <div className=" flex md:flex-row flex-col justify-between items-center">
                    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-1">
                      <div className="border-l-2 mt-10">
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                          <div className="flex-auto">
                            <h1 className="text-xl font-bold">Find your problem ? & Solution.</h1>
                          </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                          <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                          <div className="flex-auto">
                            <h1 className="text-xl font-bold">Get <span className="text-orange-500 text-2xl">Live Interview</span> Experience & best resources.</h1>
                          </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                          <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                          <div className="flex-auto">
                            <h1 className="text-xl font-bold">Prepare a Best short time Plan.</h1>
                          </div>
                        </div>

                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                          <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                          <div className="flex-auto">
                            <h1 className="text-xl font-bold">Life time <span className="text-orange-400">Support</span> & Guidance.</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        &#169;2022 | created by <a href='https://nichelearning.vercel.app/'>nichelearning.com</a>
      </footer>
    </div>
  );
}

export default App;
