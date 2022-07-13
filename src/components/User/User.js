import { useEffect, useState } from 'react';
import './User.css';

const User = ({user, setUser}) => {
    const [repos, setRepos] = useState([])
    
    const resetUser = () => {
        setUser([])
    }

    return (
        <div>
            {user && user.name && 
                <div className="user">
                    <img src={user.avatar_url} />
                    <p>{user.name}</p>
                    <p>{user.location}</p>
                    <p>{user.bio}</p>
                    <button onClick={resetUser}>RESETIRAJ</button>
                </div>
            }
        </div>
    );
}

export default User;