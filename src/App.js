import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div className="wrapper">
      <br></br>
      <h1 className='text-center'>Todo app</h1>
      <Form />
      <Todos />
    </div>
  );
}

export default App;
