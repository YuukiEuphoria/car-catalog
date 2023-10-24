import React from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarFrom = () => {
  return ( 
    <form className={styles.form}>
      <input placeholder="Name" />
    </form>
  );
};

export default CreateCarFrom;
