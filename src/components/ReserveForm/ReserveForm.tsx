import { Button } from "components/ui";
import { useMask } from "@react-input/mask";

import { Props } from "./types";
import styles from "./ReserveForm.module.sass";


const ReserceForm = ({ submit }: Props) => {
  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  return (
    <div className={styles.form}>
      <h1>Заказать звонок</h1>
      <p>Наш менеджер свяжется с вами в течение 15 минут</p>
      <input type="text" placeholder="Ваше имя" />
      <input ref={inputRef} placeholder="Контактный телефон" />
      <Button onClick={submit}>Заказать звонок</Button>
    </div>
  );
};


export default ReserceForm;
