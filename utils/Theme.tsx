import React, { ReactNode, useContext } from "react";

import { BlogContext } from "../contextApi/blogContext";

type Props = {
  children: ReactNode;
};

const Theme: React.FC<Props> = ({ children }) => {
  const { dark } = useContext(BlogContext);

  return (
    <>
      <div className={dark ? "dark" : ""}>{children}</div>
    </>
  );
};

export default Theme;
