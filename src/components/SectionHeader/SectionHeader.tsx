import SectionHeaderProps from './SectionHeaderTypes';

function SectionHeader(props: SectionHeaderProps) {
  const { hero, text, centered, colored } = props;
  return hero ? (
    <h1
      className={`font-tanPearl font-normal text-purple-80 mb-[28px] md:mb-[40px] xl:mb-[41px] text-[60px]/[55px] md:text-[80px]/[71px] xl:text-[120px]/[110px]`}
    >
      {text}
    </h1>
  ) : (
    <h2
      className={`font-cormorant font-semibold ${centered ? 'text-center' : ''} ${
        colored ? 'text-purple-80' : 'text-white'
      } mb-[32px] md:mb-[40px] xl:mb-[60px] text-[32px]/[39px] md:text-[40px]/[48px] xl:text-[48px]/[58px]`}
    >
      {text}
    </h2>
  );
}

export default SectionHeader;
