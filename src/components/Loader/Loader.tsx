import LoaderIcon from '@/public/assets/svg/loader.svg';

function Loader() {
  return (
    <LoaderIcon
      className="absolute fill-purple-80 w-[120px] h-[120px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] top-[calc(50%-60px)] left-[calc(50%-60px)] md:top-[calc(50%-80px)] md:left-[calc(50%-80px)] xl:top-[calc(50%-90px)] xl:left-[calc(50%-90px)] animate-spin"
      aria-label="Іконка завантаження"
    />
  );
}

export default Loader;
