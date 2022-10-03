import './App.css'
import Searchbar from './componets/Searchbar'

function App() {
  const onSearchSubmit = (term) => {
    console.log(term);
  };
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      < Searchbar onSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
