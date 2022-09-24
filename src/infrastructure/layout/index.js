import { LayoutStyle } from "./style";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
};

export default Layout;
