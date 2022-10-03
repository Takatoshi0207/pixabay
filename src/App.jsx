import './App.css'
import axios from 'axios';
import Searchbar from './componets/Searchbar'
import { useState } from 'react';
import ImageList from './componets/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: '30334115-ab7a210868caff303b6eb85e3',
        q: term,
      };
      const responce = await axios.get('https://pixabay.com/api/', { params });
      // console.log(responce)
      setImages(responce.data.hits);
    } catch (error) {
    }
  };
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      < Searchbar onSubmit={onSearchSubmit} />
      < ImageList images={images} />
    </div>
  )
}

export default App
