import { Props } from "./types";
import styles from "./ModalWindow.module.sass";


const ModalWindow = ({ isVisible, close, children }: Props) => {
  return (
    isVisible
      ? (
        <div className={styles.backdrop}>
          <div className={styles.content}>
            <button
              className={styles.closeButton}
              onClick={() => close()}
              children="x"
            />
            {children}
          </div>
        </div>
      )
      : null
  );
};


export default ModalWindow;
