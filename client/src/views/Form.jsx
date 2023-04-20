import React, { useEffect, useState } from "react";
import "../styles/views/Form.scss";
import { Selector } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getGenres, getPlatforms } from "../redux/actions";
import { createGame } from "../helpers";

function Form() {
  const [data, setData] = useState({
    name: "",
    image: "",
    description: "",
    rating: 0,
    released: "",
  });
  const [genreState, setGenreState] = useState([]);
  const [platformState, setPlatformState] = useState([]);

  const { genres, platforms } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData({ name: "", image: "", description: "", rating: 0, released: "" });
    createGame({ ...data, genres: genreState, platforms: platformState });
    setGenreState([]);
    setPlatformState([]);
  };

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className="form">
      <form action="submit" onSubmit={handleSubmit}>
        <h3>Crear juego</h3>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            name="image"
            value={data.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripcion:</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            min={0}
            max={100}
            value={data.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="platforms">Plataformas:</label>
          <Selector
            state={platformState}
            setState={setPlatformState}
            category={platforms}
            name="platforms"
            required
          />
        </div>
        <div>
          <label htmlFor="genres">Generos:</label>
          <Selector
            state={genreState}
            setState={setGenreState}
            category={genres}
            name="genres"
            required
          />
        </div>
        <div>
          <label htmlFor="released">Fecha de lanzamiento:</label>
          <input
            type="date"
            name="released"
            value={data.released}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Form;
