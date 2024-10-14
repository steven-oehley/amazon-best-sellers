import BookList from "./components/BookList";

export default function App() {
  return (
    <div>
      <h1 className="text-4xl text-primary text-center mb-16">
        Top Selling Books
      </h1>
      <BookList />
    </div>
  );
}
