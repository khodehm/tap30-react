export const ServiceSvg = ({isActive}:any) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={isActive? 'var(--black)':"currentColor"}
    className=""
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    style={{
      cursor: 'pointer',
      scale:isActive? "1.1":"1",
    }}
    >
    
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Zm10 2h-4v5h6V7a2 2 0 0 0-2-2Zm2 7h-6v7h4a2 2 0 0 0 2-2v-5Zm-8-7H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4V5Z"
      style={{fill:isActive ? "var(--black) " : "var(--text-1)"}}
    
    >
    
    </path>
    </svg>

  );
};


