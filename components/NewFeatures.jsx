import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} h-[70px] rounded-[24px] bg-[#323F5D] justify-center items-center w-full p-[10px]`}
    >
      {/* <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" /> */}
      <h1 className="font-bold text-[18px]  text-white text-center">
      {title}
    </h1>
    </div>
    <p className="flex-1 mt-[16px] font-normal text-[16px] text-[#B0B0B0] leading-[32.4px] text-center">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
