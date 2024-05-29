import { useNavigate } from "react-router-dom";

import { SliderCardProps } from "../types";

import styles from "./SliderCard.module.sass";


const SliderCard = ({ id, image, name, compound }: SliderCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.SliderCard}>
      <div className={styles.imageContainer}>
        <img className={styles.preview} src={`staticPreviews/${image}`} />
      </div>
      <div className={styles.description}>
        <div>{name}</div>
        <div>{compound}</div>
      </div>
      <button
        className={styles.expandButton}
        onClick={() => navigate("/Hona/preview/" + id)}
      >
        Рассмотреть!
      </button>
    </div>
  );
};


export default SliderCard;
