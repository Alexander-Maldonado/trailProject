// import axios from 'axios';
// import { useState } from 'react';
import { Link } from "react-router-dom";

const Add= (props) =>{
    // const [trailUser, setTrailUser]= useState('');
    // const [trailName, setTrailName]= useState('');
    // const [city, setCity]= useState('');
    // const [state, setState]= useState('');
    // const [zipCode, setZipCode]= useState('');
    // const [date, setDate]= useState('');
    // const [complete, setComplete]= useState('');
    // const navigate = useNavigate();

    // const submitForm = (e)=>{
    //     e.preventDefault();
    //     axios.post(`http://localhost:8000/api/`,{trailUser,trailName,city,state,zipCode,date,complete})
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         navigate('/trails/user');
    //         setTrailUser('');
    //         setTrailName('');
    //         setCity('');
    //         setState('');
    //         setZipCode('');
    //         setDate('');
    //         setComplete('');
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

    return(
        <div className="container">
            <div className="title">
                <header>
                    <h1>Add A Trail</h1>
                </header>
                <Link to={'/trails/user'}>Return to Your Trails</Link>
            </div>
            <div className="register">
                <form className="info">
                    <div className="input">
                        <label>Trail Name: </label>
                        <input
                        //value={}
                        name='trailName'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>City: </label>
                        <input
                        //value={}
                        name='city'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>State: </label>
                        <input
                        //value={}
                        name='state'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Zip Code: </label>
                        <input
                        //value={}
                        name='zipCode'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>date: </label>
                        <input
                        //value={}
                        name='date'
                        type='date'
                        />
                    </div>
                    <div className="input">
                        <label>Completed? </label>
                        <input
                        //value={}
                        name='complete'
                        type='radio'
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

export default Add;