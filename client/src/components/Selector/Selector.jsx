import React from "react";

function Selector({ category, state, setState, name }) {
  const handleSelect = (event) => {
    const { value } = event.target;
    const finded = category.find((item) => item.name === value);
    if (!!finded && !state.includes(finded)) {
      setState([...state, finded]);
      event.target.value = "";
    }
  };

  const handleDelete = (event) => {
    const item = event.target.innerText;
    setState([...state.filter((prop) => prop.name !== item)]);
  };

  return (
    <div>
      <input type="search" list={`${name}-list`} onSelect={handleSelect} />
      <datalist id={`${name}-list`}>
        {category.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </datalist>
      <div>
        {state &&
          state.map(({ name, id }) => {
            return (
              <div onClick={handleDelete} key={id}>
                <span>x</span>
                <p>{name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Selector;
