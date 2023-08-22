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
          alert.show("A note has been added", "success");
        })
        .catch(() => {
          alert.show("Something went wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("Enter the name of the note");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label for="exampleDataList" className="form-label">
        Add note
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type here!"
      />
    </form>
  );
};
