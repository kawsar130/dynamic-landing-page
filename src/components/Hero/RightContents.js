import { halfXTop, halfXBottom } from '@/assets';
import Image from 'next/image';

const RightContents = () => {
  return (
    <div className="border-1 w-1/2 flex flex-col items-center justify-center gap-5">
      <Image priority src={halfXTop} alt="Half of X - Top" />
      <Image priority src={halfXBottom} alt="Half of X - Bottom" />
    </div>
  );
};
export default RightContents;
