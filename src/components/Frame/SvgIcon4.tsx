import { memo, SVGProps } from 'react';

const SvgIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_202_35)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.3428 1.38462H3.14923V0.461538H11.9185V9.23077H10.9954V2.03723L1.62985 11.4037L0.976307 10.7502L10.3428 1.38462Z'
        fill='#F5F5F5'
      />
    </g>
    <defs>
      <clipPath id='clip0_202_35'>
        <rect width={12} height={12} fill='white' transform='translate(0.380001)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgIcon4);
export { Memo as SvgIcon4 };
