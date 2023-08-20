import React, { useState, createContext, ReactNode } from "react";

export const BlogContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export const BlogProvider: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <BlogContext.Provider value={{ dark: true, setDark }}>
      {children}
    </BlogContext.Provider>
  );
};
