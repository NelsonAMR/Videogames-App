import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../redux/actions";

import "../../styles/components/Paginator/Paginator.scss";

function Paginator() {
  const { page, size } = useSelector((state) => state.app);
  const { games } = useSelector((state) => state.games);
  // const [selectPage, setSelectPage] = useState(page);

  const dispatch = useDispatch();

  const totalPages = Math.ceil(games.length / size);
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (page - 1 > 0) dispatch(getPage(page - 1));
  };

  const handleNext = () => {
    if (page + 1 <= totalPages) dispatch(getPage(page + 1));
  };

  // const handleChange = (event) => {
  //   const { value } = event.target;

  //   if (value < 1) {
  //     dispatch(getPage(1));
  //   }

  //   if (value >= 0 && value <= totalPages) {
  //     dispatch(getPage(value));
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.querySelector("input");
    if (value > 0 && value <= totalPages) {
      dispatch(getPage(value));
    } else if (value <= 0) {
      event.target.querySelector("input").value = 1;
      dispatch(getPage(1));
    } else if (value > totalPages) {
      event.target.querySelector("input").value = totalPages;
      dispatch(getPage(totalPages));
    }
  };

  return (
    <div className="paginator">
      <button onClick={handlePrev} className="btn">
        Prev
      </button>
      <form action="submit" onSubmit={handleSubmit} className="paginator-pages">
        <input
          type="text"
          min={1}
          max={totalPages}
          // onChange={handleChange}
          placeholder={page}
          className="pag-input"
        />
        <p>de {totalPages}</p>
      </form>
      <button onClick={handleNext} className="btn">
        Next
      </button>
    </div>
  );
}

export default Paginator;
