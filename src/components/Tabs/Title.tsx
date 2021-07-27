import React, { useCallback } from "react"

import cx from "classnames";
import './styles.css';

type Props = {
  index: number;
  title: string;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
};

const Title: React.FC<Props> = ({ index, title, isActive, setSelectedTab }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index])

  let className= cx('tab-item', {
    'tab-item-active': isActive
  });

  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  )
};

export default Title;