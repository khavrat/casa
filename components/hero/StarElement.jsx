import Image from "next/image";
import star from "../../public/images/star.png";

export const StarEl = () => {
  return (
      <Image
        src={star}
        alt="star"
        priority={true}
      />
  );
};
