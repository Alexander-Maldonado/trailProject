import {Link} from 'react-router-dom';

const Users = (props) =>{

    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Viewing All Users</h1>
                </header>
            </div>
            <div className='data'>
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
                        <th ></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
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