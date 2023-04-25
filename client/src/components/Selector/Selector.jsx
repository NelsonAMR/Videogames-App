import React from "react";
import "../../styles/components/Selector/Selector.scss";

function Selector({ datalist, state, setState, name, placeholder }) {
  const handleSelect = (event) => {
    const { value } = event.target;
    const finded = datalist.find((item) => item.name === value);
    if (!!finded && !state.includes(finded)) {
      setState([...state, finded]);
      event.target.value = "";
    }
  };

  const handleDelete = (event) => {
    const item = event.target
      .closest(".selector-tag")
      .querySelector(".selector-name").textContent;
    setState([...state.filter((prop) => prop.name !== item)]);
  };

  return (
    <div className="selector">
      <input
        className="selector-input"
        type="search"
        list={`${name}-list`}
        onSelect={handleSelect}
        placeholder={placeholder}
      />
      <datalist id={`${name}-list`}>
        {datalist.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </datalist>
      <div className="selector-tags">
        {state &&
          state.map(({ name, id }) => {
            return (
              <div className="selector-tag" key={id} onClick={handleDelete}>
                <p className="selector-name">{name}</p>
                <span className="selector-x">X</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Selector;
