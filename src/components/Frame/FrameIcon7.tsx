import { memo, SVGProps } from 'react';

const FrameIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.4 2.6406L9.3 11.5406M9.3 11.5406L9.4 11.6406M9.3 11.5406H9.4V4.1406M9.3 11.5406H1.9'
      stroke='black'
      strokeWidth={1.131}
    />
  </svg>
);
const Memo = memo(FrameIcon7);
export { Memo as FrameIcon7 };
