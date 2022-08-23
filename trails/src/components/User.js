import {Link} from 'react-router-dom';

const User = (props) =>{

    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Welcome</h1>
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
                <Link to={'/trails/add'}>Add a Trail</Link>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    )
}

export default User;