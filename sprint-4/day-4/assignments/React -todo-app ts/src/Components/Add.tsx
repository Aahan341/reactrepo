import React from "react";

const Add = () => {
  return (
    <form data-testid="form">
      <input data-testid="title" type="text" id="title" />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
