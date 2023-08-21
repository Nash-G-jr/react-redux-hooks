import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/AlertState";
import { FirebaseContext } from "../context/firebase/FirebaseState";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Трек был добавлен", "success");
        })
        .catch(() => {
          alert.show("Что-то пошло не так", "danger");
        });
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
