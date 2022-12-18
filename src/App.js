import Navbar from "./components/navbar/Navbar";
import "./App.css";
import CarouselComponent from "./components/Carousel/CarouselComponent";
function App() {
  // const url = "https://edamam-recipe-search.p.rapidapi.com/search?q=breakfast";

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "e2afb93ccamsh5700354048e3642p1c5d35jsn65638ba0058d",
  //     "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  //   },
  // };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => console.log(error));

  return (
    <div className="App">
      <Navbar />
      <CarouselComponent />
    </div>
  );
}

export default App;
