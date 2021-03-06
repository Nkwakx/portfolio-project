import Footer from '../components/Footer';
import ScrollToTopBtn from "./ScrollToTop";
import Routing from '../routes/Routing';

function App() {
  return (
    <>
      <div className='App'>
        <Routing />
        <ScrollToTopBtn />
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
}

export default App;
