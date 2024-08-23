import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
        setInputValue("");
      }}
      className={styles.form}
    >
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={styles.input}
      />
      <Button>Dodaj</Button>
    </form>
  );
}
