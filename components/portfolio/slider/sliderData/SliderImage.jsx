import Image from "next/image";
import { sliderData } from "../../../../data/sliderData";
// import beforeImg from "../../../../public/images/slider/beforeImg.jpg";
// import afterImg from "../../../../public/images/slider/afterImg.jpg";

export const BeforeImage = ({ width, height, item }) => {
  return (
    <Image
      src={item}
      alt="фото до змін"
      priority={true}
      width={width}
      height={height}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};

export const AfterImage = ({ width, height, item }) => {
  return (
    <Image
      src={item}
      alt="фото після змін"
      priority={true}
      width={width}
      height={height}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};
