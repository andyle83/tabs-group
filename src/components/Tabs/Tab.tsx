import React from "react";

type Props = {
  id: string;
  title: string;
};

const Tab: React.FC<Props> = ({ id, children }) => {
  return <div id={id} role="tabpanel">{children}</div>
};

export default Tab;