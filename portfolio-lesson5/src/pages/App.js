import Footer from '../components/Footer';
import Routing from '../routes/Routing';

function App() {
  return (
    <>
      <div className='App'>
        <Routing />
        <Footer year={new Date().getFullYear()} />
      </div>
    </>
  );
}

export default App;
