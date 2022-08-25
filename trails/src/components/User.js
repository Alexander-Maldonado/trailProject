import {Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = (props) =>{
    const [users, setUsers] = useState({});
    const navigate = useNavigate();

    const logout=()=>{
        axios.post('http://localhost:8000/api/trails/logout',{},{withCredentials:true})
        .then((res)=>{
        console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/trails/user/`,{
            withCredentials:true
        })
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data);
        })
        .catch((err)=>{
            console.log('not authorized');
            console.log(err);
            navigate('/');
        });
    }, []);

    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Welcome {users.firstName}</h1>
                </header>
            </div>
                <h2>Your Trails</h2>
            <div className='data'>
                <table className="table">
                    <thead className="thead">
                        <tr>
                        <th >Name of Trail</th>
                        <th >Location</th>
                        <th >Completed (Y/N)</th>
                        <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th ></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='links'>
                <Link to={'/trails/users'}>View Other Users</Link>
                <button onClick={logout}>Logout</button>
                <Link to={'/trails/add'}>Add a Trail</Link>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    )
}

export default User;