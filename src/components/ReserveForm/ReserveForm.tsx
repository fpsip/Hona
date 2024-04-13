import { Button } from "components/ui";

import { Props } from "./types";
import styles from "./ReserveForm.module.sass";


const ReserceForm = ({ submit }: Props) => {
  return (
    <form className={styles.form}>
      <h1>Заказать звонок</h1>
      <p>Наш менеджер свяжется с вами в течение 15 минут</p>
      <input type="text" placeholder="Ваше имя"/>
      <input type="tel" placeholder="Контактный телефон"/>
      <Button onClick={submit}>Заказать звонок</Button>
    </form>
  );
};

 
export default ReserceForm;
