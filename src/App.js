import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import {useDispatch, useSelector} from 'react-redux'
import UserProfile from './components/UserProfile';
function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
    <Header/>
    {isAuthenticated ? <UserProfile/> : <Auth/>}

    <Counter />
    </>
  );
}

export default App;
