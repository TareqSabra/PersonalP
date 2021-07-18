import React from "react";
import Carousel from "react-bootstrap/Carousel";
interface Props {
  file: {
    ImgTitle: string;
    Img: string;
    ImgDiscrbition: string;
  }[];
}
export const MyCarousel: React.FC<Props> = ({ file }) => {
  return (
    <Carousel fade>
      {file.map((item, index) => {
        return (
          <Carousel.Item>
            <img
              width="1000"
              height="700"
              src={item.Img}
              alt="First slide"
              style={{ borderRadius: "4%" }}
            />
            <Carousel.Caption className="text-danger">
              <h3>{item.ImgTitle}</h3>
              <p>{item.ImgDiscrbition}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
