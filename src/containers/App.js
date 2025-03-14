import './App.css';
import Navbar from './Navbar';
import Frontpage from './Frontpage';

function App() {
  return (
    <div>
      <div className='tc'>
      <h1 class="mt2 mb0 i fw1 f1">Just Lift</h1>
      <h2 class="mt2 mb0 f6 fw4 ttu tracked">No one will stop you</h2>
      <Navbar />
      <Frontpage />
      </div>
    </div>
  );
}

export default App;
