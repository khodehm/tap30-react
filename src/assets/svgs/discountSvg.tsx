export const DiscountSvg = ({ isActive }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      data-src="/assets/ad829401.svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      style={{
        cursor: 'pointer',
        fill: isActive ? 'var(--balck)' : 'var(--text-1)', // Toggle fill color on click
        transition: 'fill 0.3s ease',
        scale:isActive? "1.1":"1"
      }}
    >
      <path
        d="m15.066 9.995-1.06-1.06-5.072 5.07 1.06 1.06 5.072-5.07ZM15.49 14.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM10.518 9.534a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
         fill={isActive ? "var(--black) " : "var(--text-1)"}
         fillRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm4-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      ></path>
    </svg>
  );
};
