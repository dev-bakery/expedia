import { RecoilRoot } from 'recoil';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <div className='box__event--container'>
        <Nav />
      </div>
    </RecoilRoot>
  );
}

export default App;
