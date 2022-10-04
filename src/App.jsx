import './App.css'
import axios from 'axios';
import Searchbar from './componets/Searchbar'
import { useState } from 'react';
import ImageList from './componets/ImageList';
import logo from './assets/moc_black.png'

function App() {
  const [images, setImages] = useState([]);
  const ApiKey = import.meta.env.VITE_APP_PIXABAY_APIKEY;
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        q: term,
      };
      const responce = await axios.get('https://pixabay.com/api/', { params });
      // console.log(responce)
      setImages(responce.data.hits);
      if (responce.data.total === 0) {
        window.alert('お探しの画像は無いようです');
      }
    } catch (error) {
      window.alert(' 写真の取得に失敗しました。')
    }
  };
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <div className="logoImg">
        <img src={logo} alt="moc" className='moc-logo' />
      </div>
      < Searchbar onSubmit={onSearchSubmit} />
      < ImageList images={images} />
    </div>
  )
}

export default App
