import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='signup'>
                <div className='signup1'>
                    <div className="logo" onClick={()=>navigate('/home')}>
                        <span>BITBOT</span>
                        <span>EXCHANGE</span>
                    </div>
                </div>

                <div className='signup2'>
                    <h2>Get Started</h2>

                    <div className='signup3'>
                        <div className='signup4'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className='signup4'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" />
                        </div>
                        <div className='signup4'>
                            <label htmlFor="">Referral Code (Optional)</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div className='signup5'>
                            <input type="checkbox" name="" id="" />

                            <p>I am over 18 years old and I have read, understand
                                and agree to the Terms of Use. </p>
                        </div>

                        <div className='signup6'>
                            <button  onClick={()=>navigate('/home')}>Create Account</button>
                        </div>

                        <div className='signup7'>
                            <p>Already have an account?</p>
                            <span> Log In</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
