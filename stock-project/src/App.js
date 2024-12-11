import './App.css';
import AddCategory from './components/AddCategory';
import DisplayData from './components/DisplayData';
import GetCategories from './components/GetCategories';

function App() {
  return (
    <div className='row App'>
      <div className="column"> <AddCategory/> </div>
      <div className="column"> <GetCategories/></div>
      <div className="column"> <DisplayData /> </div>
    </div>
  );
}

export default App;
