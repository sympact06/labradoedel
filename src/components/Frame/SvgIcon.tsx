import { memo, SVGProps } from 'react';

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.0258 2.88462H6.03924V0.961538H24.3085V19.2308H22.3854V4.24423L2.87385 23.7577L1.51231 22.3962L21.0258 2.88462Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(SvgIcon);
export { Memo as SvgIcon };
