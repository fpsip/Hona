
import classNames from "classnames";

import { SectionContent } from "components/SectionContent";
import { ReserveButton } from "components/ReserveButton";

import styles from "./About.module.sass";


const About = () => {
  return (
    <section>
      <SectionContent className={styles.content}>

        <div className={classNames(styles.column, styles.info)}>
          <h1>О нас</h1>
          <p>Детское кафе “MAGIC CASTLE” - это уютное место, где дети могут наслаждаться вкусными блюдами и развлечениями. Интерьер выполнен в стиле волшебного замка с яркими красками и сказочными элементами.</p>
          <p>Родители могут отдохнуть в отдельной зоне, наблюдая за своими детьми через большое зеркало или стеклянную стену.</p>
          <p>“MAGIC CASTLE” предлагает услугу празднования детских праздников с индивидуальным подходом к каждому клиенту.</p>
          <ReserveButton />
        </div>

        <img
          className={classNames(styles.column, styles.imageContainer)}
          src="about.jpg"
        />

      </SectionContent>
    </section>
  );
}


export default About;
