import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { deleteAll } from './redux/todoapp/reducers/operations';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operations.items);

  return (
    <div className="wrapper">
      <br></br>
      <h1 className='text-center'>Todo app</h1>
      <Form />
      <Todos />
      {todos.length > 1 &&  <button className='btn btn-danger btn-md delete-all' onClick={() => {
        dispatch(deleteAll());
      }}>DELETE ALL</button> }
    
    </div>
  );
}

export default App;
