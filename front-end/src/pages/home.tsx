import React from "react";
import "./homestyle.css";
import { imgs } from "../Resoruces/data/data";
import { MyCarousel } from "../componants/Carousel/Carousel";
interface Props {}
export const Home: React.FC<Props> = () => {
  return (
    <div className="Containor">
      <div className="wallpaper">
        <div className="informationC">
          <div className="Titel">Mena The Cat</div>
          <div className="Information">
            <span>
              I'm a Royal cat living amoung commoners, I come from a long
              bloodline of royal cats, my father is a Persian cat and my mother
              is a Turkish angora.
            </span>
          </div>
        </div>
      </div>
      <div className="Carousal" style={{ width: "100%" }}>
        <MyCarousel file={imgs} />
      </div>
    </div>
  );
};
