import LeftContents from './LeftContents';
import RightContents from './RightContents';

const Hero = () => {
  return (
    <div className="h-182 border-1 flex justify-center items-center p-20">
      <div className="flex items-center justify-center gap-20">
        <LeftContents />
        <RightContents />
      </div>
    </div>
  );
};
export default Hero;
