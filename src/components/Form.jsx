import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/AlertState";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      alert.show("Трек был добавлен", "success");
      setValue("");
    } else {
      alert.show("Введите название трека");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label for="exampleDataList" className="form-label">
        Find track
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
    </form>
  );
};
