import { RecoilRoot } from 'recoil';
import SectionBenefit from './components/contents/sectionBenefit';
import SectionCoupon from './components/contents/sectionCoupon';
import SectionOverlap from './components/contents/sectionOverlap';
import Header from './components/header/header';
import Nav from './components/nav/nav';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <div className='box__event--container'>
        <Nav />
        <div className='box__anchor'>
          <SectionBenefit />
          <SectionCoupon />
          <SectionOverlap />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
