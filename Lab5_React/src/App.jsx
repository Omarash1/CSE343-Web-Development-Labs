import { useState } from "react";
import "./style.css";

// Task 1: Movies watch list

function Stars(props) {
  if (props.rating === 0) {
    return <p className="stars">No rating yet</p>;
  }
  return <p className="stars">{"⭐".repeat(props.rating)} ({props.rating}/5)</p>;
}

function MovieCard(props) {
  const movie = props.movie;
  const [text, setText] = useState("");

  function handleSaveReview() {
    if (text.trim() === "") return;
    props.onReview(movie.id, text.trim());
    setText("");
  }

  return (
    <div className="card">
      <div className="card-top">
        <h3>{movie.title}</h3>
        <button className="remove" onClick={() => props.onRemove(movie.id)}>Remove</button>
      </div>

      <Stars rating={movie.rating} />

      <div className="row">
        <span>Rate:</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} className="rate" onClick={() => props.onRate(movie.id, n)}>{n}</button>
        ))}
      </div>

      {movie.review !== "" && <p className="review">"{movie.review}"</p>}

      <div className="row">
        <input
          type="text"
          placeholder="Write a review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSaveReview}>Save Review</button>
      </div>
    </div>
  );
}

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  function handleAdd() {
    if (title.trim() === "") return;
    const newMovie = { id: Date.now(), title: title.trim(), rating: 0, review: "" };
    setMovies([...movies, newMovie]);
    setTitle("");
  }

  function handleRemove(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  function handleRate(id, rating) {
    setMovies(movies.map((m) => (m.id === id ? { ...m, rating: rating } : m)));
  }

  function handleReview(id, review) {
    setMovies(movies.map((m) => (m.id === id ? { ...m, review: review } : m)));
  }

  return (
    <section>
      <h2>My Movies ({movies.length})</h2>
      <div className="row">
        <input
          type="text"
          placeholder="Movie name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add Movie</button>
      </div>

      {movies.length === 0 ? (
        <p className="empty">No movies yet. Add one above.</p>
      ) : (
        movies.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}
            onRemove={handleRemove}
            onRate={handleRate}
            onReview={handleReview}
          />
        ))
      )}
    </section>
  );
}

// Task 2: Comments section

function Comment(props) {
  const comment = props.comment;
  return (
    <div className="comment">
      <div className="avatar">{comment.name[0]}</div>
      <div className="bubble">
        <b>{comment.name}</b>
        <p>{comment.text}</p>
        <button className="like" onClick={() => props.onLike(comment.id)}>❤️ {comment.likes}</button>
      </div>
    </div>
  );
}

function Comments() {
  const [comments, setComments] = useState([
    { id: 1, name: "Sara", text: "Great explanation of components!", likes: 5 },
    { id: 2, name: "Omar", text: "Props finally make sense to me.", likes: 2 },
    { id: 3, name: "Ali", text: "Can we do a lab on useState next week?", likes: 7 },
  ]);
  const [text, setText] = useState("");

  function handlePost() {
    if (text.trim() === "") return;
    const newComment = { id: Date.now(), name: "You", text: text.trim(), likes: 0 };
    setComments([...comments, newComment]);
    setText("");
  }

  function handleLike(id) {
    setComments(comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)));
  }

  return (
    <section>
      <h2>Comments ({comments.length})</h2>
      <div className="row">
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {comments.map((c) => (
        <Comment key={c.id} comment={c} onLike={handleLike} />
      ))}
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <h1>Movie Watch List</h1>
      <MovieList />
      <Comments />
    </div>
  );
}

export default App;
