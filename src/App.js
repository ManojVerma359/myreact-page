// import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import Header from "./components/Header";
import Sectionhero from "./components/Sectionhero";
import Aisection from "./components/Aisection";
import Sectiontable from "./components/Sectiontable";
import Cardsection from "./components/Cardsection";
import Myfooter from "./components/Myfooter";

function App() {
  return (
    <>
      <Header />
      <Sectionhero />
      <Accordion />
      <Aisection />
      <Sectiontable />
      <Cardsection />
      <Myfooter />
    </>
  );
}

export default App;
