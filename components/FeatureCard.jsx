import styles from "@/styles";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const FeatureCard = ({ imgUrl, title, subtitle }) => (
  <Tilt
    className=" py-6 px-6 rounded-3xl border-[#536387] border-4 border-double"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    glareBorderRadius="20px"
    scale={1.02}
  >
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <Image 
        // src={imgUrl} 
        width={40}
        height={40}
        src={imgUrl}
        alt="icon" 
        className="object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[16px]  text-[15px] font-extralight text-[#ffffff] leading-[25.4px]">
        {subtitle}
      </p>
    </div>
  </Tilt>
);

export default FeatureCard;
