import plusIcon from "../../assets/plus_icon.svg";
import React, { useContext } from "react";
import styles from "./GetButton.module.css";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";

export const GetButton = () => {
  const { avatarQuantity } = useContext(AppContext);

  const handleNewPhoto = () => {
    const quantity = avatarQuantity.quantity;
    avatarQuantity.setQuantity(quantity + 1);
  };

  return (
    <button className={styles.square_button} onClick={handleNewPhoto}>
      <Image
        className={styles.square_button__icon}
        src={plusIcon}
        alt="plus_icon"
      />
    </button>
  );
};
