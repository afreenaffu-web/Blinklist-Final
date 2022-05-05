import "./App.css";

//import image from './components/atoms/Images/book.png'
import AllTabs from "./components/molecules/AllTabs";
//import BookCard from './components/molecules/BookCard';
import Footer from "./components/Organisms/Footer/currentBookFooter";
import Header from "./components/Organisms/Headers/currentBookHeader";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AllTabs searchTerm="" />
        <Footer />
      </div>
    </>
  );
}

export default App;
