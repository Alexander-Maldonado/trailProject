import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = (props) =>{

    const [trails, setTrails] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/trails')
        .then((res)=>{
            console.log(res.data);
            setTrails(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [])

    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Viewing All Users</h1>
                </header>
            </div>
            <div className='data'>
                {trails.map((trail, index)=>(
                    <table className="table">
                    <thead className="thead">
                        <tr>
                        <th >Name</th>
                        <th >Age</th>
                        <th ># of Trails Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {/* <th ></th> */}
                        <td>{trail.User}</td>
                        <td>trail.add</td>
                        <td>{trail.numOfTrails}</td>
                        </tr>
                    </tbody>
                </table>
                ))}
            </div>
            <div className='links'>
                <Link to={'/trails/user'}>View Your Trails</Link>
                <Link to={'/trails/add'}>Add a Trail</Link>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    )
}

export default Users;