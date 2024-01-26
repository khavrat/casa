import { Link, Span } from "./LinkToContacts.styled";

export const LinkToContacts = ({ title, rotate, display }) => {
    console.log("rotate :>> ", rotate === "-90");
    
  return (
    <Link href="#" aria-label="link to contacts" style={{ display }}>
      <Span>{title}</Span>
      <svg
        width="11"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 15.61 0 8.357l1.458-1.921 3.01 3.97V.953h2.063v9.454l3.012-3.97L11 8.358 5.5 15.61Z"
          fill="#211F1E"
        />
      </svg>
    </Link>
  );
};
//   transform: `rotate(${rotate}deg)`,
