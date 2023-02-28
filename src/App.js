
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import Navbar2 from './components/Navbar2';
import Hero2 from './components/Hero2';

function App() {
  console.log(data[1]);

  const cards = data.map(cardData => {
    return (

      <Card data={cardData} />
    )


  })

  return (
    <>
      <div className="App" >
        <Navbar />
        <Navbar2/>
        <Hero />
        <Hero2 name="beyti" />
        <section className="cards-list" >
          {cards}
        </section>

      </div>
    </>

  );
}

export default App;
