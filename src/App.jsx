import "./App.css";
import data from "./data.json";
import Title from "./Book component/Title";
import Author from "./Book component/Auther";
import BookInfo from "./Book component/BookInfo";
import Coverimag from "./Book component/Coverimag";

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <div>
        <Coverimag src={books.image} alt={books.title} />
        <Title title={books.title} />
        <Author author={books.author} />
        <BookInfo
          year={book.year}
          genre={book.genre}
          rating={book.rating}
          description={book.description}
        />
      </div>
    </>
  );
}

export default App;
