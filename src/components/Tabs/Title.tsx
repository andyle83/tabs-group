import React, { useCallback } from "react"
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

  return (
    <li className={isActive ? 'tab-item tab-item-active' : 'tab-item'} onClick={onClick}>
      {title}
    </li>
  )
};

export default Title;