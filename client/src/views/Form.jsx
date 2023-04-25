import React, { useEffect, useState } from "react";
import { Selector } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getGenres, getPlatforms } from "../redux/actions";
import { createGame, validation } from "../helpers";

import "../styles/views/Form.scss";

function Form() {
  const [data, setData] = useState({
    name: "",
    image: "",
    description: "",
    rating: 0,
    released: "",
  });
  const [errors, setErrors] = useState({});
  const [genreState, setGenreState] = useState([]);
  const [platformState, setPlatformState] = useState([]);

  const { genres, platforms } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
    setErrors(
      validation({ ...data, [name]: value }, genreState, platformState)
    );
    console.log(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors) {
      createGame({ ...data, genres: genreState, platforms: platformState });
      setData({
        name: "",
        image: "",
        description: "",
        rating: 0,
        released: "",
      });
      setGenreState([]);
      setPlatformState([]);
    } else {
      alert("Errores");
    }
  };

  useEffect(() => {
    dispatch(clearState());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className="form">
      <form action="submit" onSubmit={handleSubmit} className="form-cont">
        <h3 className="title">Crear juego</h3>
        <div className="form-camp">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="¿Como se llama el juego?"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            type="text"
            name="image"
            value={data.image}
            onChange={handleChange}
            placeholder="https://url-imagen.jpg"
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            min={0}
            max={100}
            value={data.rating}
            onChange={handleChange}
            required
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="platforms">Plataformas</label>
          <Selector
            dispatch={() => dispatch()}
            state={platformState}
            setState={setPlatformState}
            datalist={platforms}
            name="platforms"
            placeholder="Plataformas en que esta disponible"
          />
          {errors.platforms && <p className="error">{errors.platforms}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="genres">Generos</label>
          <Selector
            state={genreState}
            setState={setGenreState}
            datalist={genres}
            name="genres"
            required
            placeholder="¿A que generos pertenece?"
          />
          {errors.genres && <p className="error">{errors.genres}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="released">Fecha de lanzamiento</label>
          <input
            type="date"
            name="released"
            value={data.released}
            onChange={handleChange}
            placeholder="dd/mm/aaaa"
            required
          />
          {errors.released && <p className="error">{errors.released}</p>}
        </div>
        <div className="form-camp">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <button type="submit" className="btn">
          Crear
        </button>
      </form>
    </div>
  );
}

export default Form;
