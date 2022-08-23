// import axios from 'axios';
// import { useState } from 'react';
import { Link } from "react-router-dom";

const Register= (props) =>{
    // const [firstName, setFirstName]= useState('');
    // const [lastName, setLastName]= useState('');
    // const [emai, setEmail]= useState('');
    // const [password, setPassword]= useState('');
    // const [confirmPassword, setConfirmPassword]= useState('');
    // const [age, setAge]= useState('');
    // const navigate = useNavigate();

    // const submitForm = (e)=>{
    //     e.preventDefault();
    //     axios.post(`http://localhost:8000/api/`,{firstName,lastName,emai,password,confirmPassword,age})
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         navigate('/');
    //         setFirstName('');
    //         setLastName('');
    //         setEmail('');
    //         setPassword('');
    //         setConfirmPassword('');
    //         setAge('');
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

    return(
        <div className="container">
            <div className="title">
                <header>
                    <h1>Registration</h1>
                </header>
                <Link to={'/'}>Return to Log In</Link>
            </div>
            <div className="register">
                <form className="info">
                    <div className="input">
                        <label>First Name: </label>
                        <input
                        //value={}
                        name='First Name'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Last Name: </label>
                        <input
                        //value={}
                        name='Last Name'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Age: </label>
                        <input
                        //value={}
                        name='age'
                        type='date'
                        />
                    </div>
                    <div className="input">
                        <label>Email: </label>
                        <input
                        //value={}
                        name='email'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Password: </label>
                        <input
                        //value={}
                        name='password'
                        type='password'
                        />
                    </div>
                    <div className="input">
                        <label>Confirm Password: </label>
                        <input
                        //value={}
                        name='confirmPassword'
                        type='password'
                        />
                    </div>
                    <button>Submit</button>
                </form>
                </div>
                <div>
                    <img className="registerPic" src="https://cloudfront.traillink.com/photos/rincon-bike-trail_139202_hero.jpg" alt="Rincon Bike Trail"/>
                </div>
                <footer>
                    <p>Copyright © 2022 Maldonado, Inc,</p>
                </footer>
        </div>
    )
}

export default Register;