const Book = ({ author, imageLink, title, onClickBook, index }) => {
  return (
    <article className="card w-100 shadow-2xl bg-secondary relative">
      <div className="badge badge-primary absolute top-2 left-2">
        Book #{index + 1}
      </div>
      <figure className="px-10 pt-10 ">
        <img src={imageLink} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <button onClick={() => onClickBook(index)} className="btn btn-accent">
          click me{" "}
        </button>
      </div>
    </article>
  );
};
export default Book;
