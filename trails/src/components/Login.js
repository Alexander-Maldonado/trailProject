import {Link} from 'react-router-dom';

const LogIn = (props)=> {
    return(
    <body className='trails'>
        <div className='container'>
            <div className='title'>
                <header>
                    <h1>Trails</h1>
                    <h3>Relaxation Is A Step Away</h3>
                </header>
            </div>
            <div className='home'>
                <div>
                    <img className='pictureHome' src='https://www.fodors.com/wp-content/uploads/2020/09/02_ScenicBikePaths__GeorgeSMickelsonTrail_2-2788877995_cdce0d2db2_o.jpg' alt='George S. Mickelson Trail'/>
                </div>
                <div className='login'>
                    <form className='info'>
                        <div className='input'>
                            <label>Email: </label>
                            <input
                            //value={}
                            type='text'
                            name='email'
                            />
                        </div>
                        <div className='input'>
                            <label>Password: </label>
                            <input
                            //value={}
                            type='password'
                            name='password'
                            />
                        </div>
                        <button>Log In</button>
                        <br/>
                        <Link to={'trails/register'}>Register</Link>
                    </form>
                </div>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    </body>
    )
}

export default LogIn;