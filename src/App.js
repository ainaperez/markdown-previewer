
import './App.scss';
import UserInput from './components/UserInput/UserInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Markdown Previewer</p>
      </header>

      <main className='App-main'>
        <UserInput />
      </main>
      
    </div>
  );
}

export default App;
