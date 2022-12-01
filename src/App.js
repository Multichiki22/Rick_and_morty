import './App.css'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'



function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Cards characters = {characters}/>
      </div>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
