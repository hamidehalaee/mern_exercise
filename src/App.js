import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import  ExercisesList from './components/exercises-list.component'
import  EditExercise  from './components/edit-exercise.component'
import  CreateExercise  from './components/create-exercise.component'
import  CreateUser  from './components/create-user.component';
import  Navbar  from './components/navbar.component';

function App() {
  return (
    <Router>
        <Navbar />
        <Route path='/' exact component = { ExercisesList}/>
        <Route path='/edit/:id' base component = { EditExercise }/>
        <Route path='/create' base component = { CreateExercise }/>
        <Route path='/user' base component = { CreateUser }/>
      </Router>
  );
}

export default App;
