import './App.css';
import Accueil from './components/Accueil';
import { getUsers } from "./redux/UserSlice";
import { getPosts } from "./redux/PostsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div className="App">
         <Router>
        <div className="App">
          <Accueil />
        </div>
    </Router>
    </div>
  );
}

export default App;
