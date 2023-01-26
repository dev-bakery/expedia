import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';

function App() {
  return (
    <>
      <Header />
      <div className='box__event--container'>
        <Nav />
      </div>
    </>
  );
}

export default App;
