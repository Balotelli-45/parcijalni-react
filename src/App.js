import { useUserContext } from './context/UserContext';
import Form from './components/Form/Form'; 
import User from './components/User/User';

import './App.css';

function App() {
  const {user, setUser} = useUserContext();
  console.log("U AAPPU SAMM")
  console.log("USER U APPU", user)

  return (
    <>
      {user && user.name
        ? <User user={user} setUser={setUser} />
        : <Form setUser={setUser} />
       }
    </>
  );
}

export default App;
