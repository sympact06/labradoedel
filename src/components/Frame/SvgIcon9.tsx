import { memo, SVGProps } from 'react';

const SvgIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 12V6H11V12H5V13H11V19H12V13H18V12H12Z' fill='black' />
  </svg>
);
const Memo = memo(SvgIcon9);
export { Memo as SvgIcon9 };
