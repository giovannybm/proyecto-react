import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Hello from './components/pure/hello';
import TaskListComponent from './components/container/taskList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemlo4 from './hooks/Ejemlo4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Componente Propio*/}
        {/*<Hello name={'Juan'}/>*/}
        {/*<TaskListComponent/>*/}
        {/*<Ejemplo1/>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/* <Ejemplo3/> */}
        <Ejemlo4>
          <h3>
            Contenido del children
          </h3>
        </Ejemlo4>
      </header>
      
    </div>
  );
}

export default App;
