
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
          <p>Детское кафе "MAGIC CASTLE" предлагает своим юным гостям уникальное сочетание вкусной еды и захватывающих технологий благодаря инновационному 3D-меню. Посетители могут выбирать блюда, взаимодействуя с анимированными изображениями, которые оживают прямо перед их глазами, создавая иллюзию, еда находятся на столе. Это не только развлекает детей, но и обучает их, позволяя узнавать о различных культурах и ингредиентах через игровую форму.</p>
          <p>Родители могут отдохнуть в отдельной зоне, наблюдая за своими детьми через большое зеркало или стеклянную стену.</p>
          <p>"MAGIC CASTLE" – это место, где каждый элемент создан для вдохновения и радости детей, а инновационные 3D-меню делают каждый визит незабываемым приключением.</p>
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
