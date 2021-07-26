import React from 'react';

type Props = {
  content: string;
};

const Tab: React.FC<Props> = ({ content }) => {
  return <div>{content}</div>
};

export default Tab;