import Container from "./components/Container";
import ImagePage from "./components/ImagePage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Container />
      <div className="product-page__overlay"></div>
      <ImagePage/>
    </div>
  );
}

export default App;
