import "./App.css";
import data from "./data.json";
import Book from "/Book component/Book";
import Header from "./Header";

function App() {
  const { books } = data;
  console.log(books);

  return function App() {
    return (
      <div className="App">
        <Header />
        <Book books={data.books} />
      </div>
    );
  };
}

export default App;
