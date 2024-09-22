import React from "react";
import styles from './HeartCheckBox.module.scss';
import {PiHeartDuotone} from "react-icons/pi";

const HeartCheckBox = ({checkBoxId, setValue, checked}: {
  checkBoxId: string,
  setValue: (value: (string[] | ((val: string[]) => string[]))) => void
  checked: boolean
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setValue((prevState) => {
      if (!prevState.includes(checkBoxId)) {
        return [...prevState, checkBoxId];
      } else return prevState;
    });
    if (!e.target.checked) setValue((prevState) => {
      if (prevState.includes(checkBoxId)) {
        return prevState.filter((boxId) => boxId !== checkBoxId);
      } else return prevState;
    });
  };

  return (
    <div className={styles.heartCheckBoxContainer}>
      <label htmlFor={checkBoxId}/>
      <input
        className={styles.redHeartCheckBox}
        id={checkBoxId}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <PiHeartDuotone className={styles.heartIcon}/>
    </div>
  );
};

export default HeartCheckBox;
