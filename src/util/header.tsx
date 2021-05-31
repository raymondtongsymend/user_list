import { FunctionComponent } from "react";

enum HeaderSize {
  Small = 1,
  Medium,
  Large,
}

type HeaderProps = {
  text: string;
  size: HeaderSize;
  className: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  text,
  size,
  className,
  children,
}) => {
  const HeaderNode = () => {
    switch (size) {
      case HeaderSize.Small:
        return <h3>{text}</h3>;
      case HeaderSize.Medium:
        return <h2>{text}</h2>;
      case HeaderSize.Large:
      default:
        return <h1>{text}</h1>;
    }
  };

  return (
    <div className={className} key={text}>
      <HeaderNode />
      {children}
    </div>
  );
};

export { HeaderSize, Header };
