export const SmallCloseIcon = ({
  className,
  callback,
}: {
  className?: string;
  callback: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      onClick={callback}
    >
      <line
        x1="2.06066"
        y1="1.93934"
        x2="10.5459"
        y2="10.4246"
        stroke="#1CC37E"
      />
      <line
        x1="1.93934"
        y1="10.4246"
        x2="10.4246"
        y2="1.93935"
        stroke="#1CC37E"
      />
    </svg>
  );
};
