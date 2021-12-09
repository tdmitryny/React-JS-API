import { Country } from './components/Country';
import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);


  const getJson = function (url, errMes = 'Something went wrong') {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found ${errMes}, ${response.status}`)
      } return response.json()
    });
  }


  useEffect(() => {

    async function getCountryData(c1, c2, c3, c4, c5, c6, c7, c8) {
      try {
        const country = await Promise.all([
          getJson(`https://restcountries.com/v2/name/${c1}`),
          getJson(`https://restcountries.com/v2/name/${c2}`),
          getJson(`https://restcountries.com/v2/name/${c3}`),
          getJson(`https://restcountries.com/v2/name/${c4}`),
          getJson(`https://restcountries.com/v2/name/${c5}`),
          getJson(`https://restcountries.com/v2/name/${c6}`),
          getJson(`https://restcountries.com/v2/name/${c7}`),
          getJson(`https://restcountries.com/v2/name/${c8}`)
        ]);


        setItems(country);
        setisLoading(false);


      } catch (err) {
        console.log(err);

      }
    }


    getCountryData('canada', 'france', 'germany', 'italy', 'usa', 'japan', 'united kingdom', 'russia')

  }, []);


  return (
    <div className="container">
      <Header name='G7'>
        <p style={{ fontSize: '1.5rem', color: '#000' }}>The Group of Seven is an inter-governmental political forum</p>
      </Header>
      <Country setisLoading={setisLoading} items={items} />

    </div>
  );
}

export default App;
