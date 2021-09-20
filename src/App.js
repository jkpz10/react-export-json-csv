// import logo from './logo.svg';
import './App.css';
import {ExportJsonCsv} from './hooks';

function App() {
  const headers = [
    {
      key: 'id',
      name: 'ID',
    },
    {
      key: 'fname',
      name: 'First Name',
    },
  ]
  
  const data = [
    {
      id: '1',
      fname: 'John',
    },
    {
      id: '2',
      fname: 'Doe',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
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

        <ExportJsonCsv headers={headers} items={data}>Export</ExportJsonCsv>
      </header>
    </div>
  );
}

export default App;
