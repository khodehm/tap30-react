export const ProfileSvg = ({isActive}:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-src="/assets/581e8ba7.svg"

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM16.5 16h-9a2 2 0 1 0 0 4h9a2 2 0 1 0 0-4Zm-9-2a4 4 0 0 0 0 8h9a4 4 0 0 0 0-8h-9Z"
        fill={isActive ? "var(--black) " : "var(--text-1)"}
        ></path>
    </svg>
  );
};
