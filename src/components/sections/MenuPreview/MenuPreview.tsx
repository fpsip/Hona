import Slider from "react-slick";

import { SectionContent } from "components/SectionContent";
import menu from "constants/menu";

import { SliderCard } from "./SliderCard";


const MenuPreview = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section>
      <SectionContent>
        <Slider {...settings}>
          {
            menu.map(item => {
              return (
                <SliderCard
                  key={item.id}
                  id={item.id}
                  compound={item.compound}
                  name={item.label}
                  image={item.staticPreviewPath}
                />
              )
            })
          }
        </Slider>
      </SectionContent>
    </section>

  );
}


export default MenuPreview;
