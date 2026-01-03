import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import { useEffect } from 'react';

function App() {

  async function fetchData() {
    try{
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      const data = res.json();
      console.log(res)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log(fetchData())
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App

