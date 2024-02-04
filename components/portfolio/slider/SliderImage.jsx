import Image from "next/image";
import beforeImg from "../../../public/images/slider/beforeImg.jpg";
import afterImg from "../../../public/images/slider/afterImg.jpg";

export const BeforeImage = ({ width, height }) => {
  return (
    <Image
      src={beforeImg}
      alt="фото до змін"
      priority={true}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};

export const AfterImage = ({ width, height }) => {
  return (
    <Image
      src={afterImg}
      alt="фото після змін"
      priority={true}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};
