import React from "react";

export default function CarDetails({ initialData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const model = formData.get("model");
    const year = formData.get("year");
    const color = formData.get("color");

    console.log("Model:", model);
    console.log("Year:", year);
    console.log("Color:", color);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model">Model:</label>
        <input name="model" value={initialData} />
        <br />
        <label htmlFor="year">Year:</label>
        <input name="year" value={initialData} />
        <br />
        <label htmlFor="color">Color:</label>
        <input name="color" value={initialData} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
