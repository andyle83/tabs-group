import React, { useCallback } from "react"

import cx from "classnames";
import './styles.css';

type Props = {
  index: number;
  id: string;
  title: string;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
};

const Title: React.FC<Props> = ({ index, id, title, isActive, setSelectedTab }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index])

  let className= cx('tab-item', {
    'tab-item-active': isActive
  });

  return (
    <li role="presentation">
      <button 
        role="tab"
        aria-selected={isActive}
        aria-controls={id}
        tabIndex={isActive ? 0 : -1}
        className={className}
        onClick={onClick}>{title}
      </button>
    </li>
  )
};

export default Title;