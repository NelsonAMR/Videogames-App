import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../redux/actions";

import "../../styles/components/Paginator/Paginator.scss";

function Paginator() {
  const { page, size } = useSelector((state) => state.app);
  const { games } = useSelector((state) => state.games);
  const [selectPage, setSelectPage] = useState(page);

  const disptach = useDispatch();

  const totalPages = Math.ceil(games.length / size);
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (page - 1 > 0) disptach(getPage(page - 1));
  };

  const handleNext = () => {
    if (page + 1 <= totalPages) disptach(getPage(page + 1));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectPage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectPage > 0 && selectPage < totalPages) {
      disptach(getPage(selectPage));
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
          onChange={handleChange}
          value={page}
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
