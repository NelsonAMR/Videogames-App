import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../redux/actions";

function Paginator() {
  const { page, size } = useSelector((state) => state.app);
  const { games } = useSelector((state) => state.games);
  const disptach = useDispatch();

  const totalPages = Math.ceil(games.length / size);

  console.log(page, size, totalPages);

  const handlePrev = () => {
    if (page - 1 > 0) disptach(getPage(page - 1));
  };

  const handleNext = () => {
    if (page + 1 <= totalPages) disptach(getPage(page + 1));
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Paginator;
