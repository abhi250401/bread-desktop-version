
import './App.css';
import './Group.png'
import Navbar from './navbar.jsx';
import Content from './content.jsx';
import Main from './main.jsx';
import Footer from './footer.jsx';
import Photos from './photos.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <div class="img">

      </div>



      <Main />
      <Photos />
      <Footer />
    </div >
  );
}

export default App;
