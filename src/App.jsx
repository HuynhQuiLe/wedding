import "./App.css";
import Bottom from "./components/Bottom";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThyWord from "./components/ThyWord";
import Thanks from "./components/Thanks";
import Story from "./components/Story";
import TimeAndPlace from "./components/TimeAndPlace";

function App() {
  return (
    <div className="select-none">
      <Header />
      <Carousel />
      <Story />
      <TimeAndPlace />
      <ThyWord />
      <Thanks />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
