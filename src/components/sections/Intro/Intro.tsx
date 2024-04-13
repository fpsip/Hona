import { SectionContent } from "components/SectionContent";
import { ReserveButton } from "components/ReserveButton";
import { CAFE_NAME } from "constants/cafe";

import styles from "./Intro.module.sass";


const Intro = () => {
  return (
    <section className={styles.Intro}>
      <div className={styles.blur} />
      <SectionContent className={styles.content}>
        <div className={styles.label}>{CAFE_NAME}</div>
        <ReserveButton />
      </SectionContent>
    </section>
  );
};


export default Intro;
