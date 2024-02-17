import Image from "next/image";
import heroImg from "../../public/images/heroImg.jpg";

export const HeroImage = ({ width, height }) => {
    return (
      <Image
        src={heroImg}
        alt="фонова картинка сайту"
        priority={true}
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    );
};

export const HeroBg = ({ width, height }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--anjouPear-color)",
        width: "100%",
        height: "360px",
      }}
    ></div>
  );
}
