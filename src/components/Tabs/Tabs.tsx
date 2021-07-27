import React, { ReactElement, useState, useCallback, KeyboardEvent } from "react";
import Title from "./Title";

import './styles.css';

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(1);
  const tabsRef = Array(children?.length).fill(React.createRef());

  const handleNextTab = useCallback((firstTab: number, nextTab: number, lastTab: number) => {
    const tabToSelect = selectedTab === lastTab ? firstTab : nextTab;
    setSelectedTab(tabToSelect);
    tabsRef[tabToSelect - 1].current.focus();
  }, [selectedTab, tabsRef]);
  
  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLUListElement>) => {
    const tabCount = children?.length; 

    // TODO: If has no tab element ?
    if (event.key === "ArrowRight") {
      const firstTab = 1;
      const nextTab = selectedTab + 1;
      handleNextTab(firstTab, nextTab, tabCount);
    }

    if (event.key === "ArrowLeft") {
      const lastTab = tabCount;
      const nextTab = selectedTab - 1;
      handleNextTab(lastTab, nextTab, 1);
    }
  }, [children?.length, handleNextTab, selectedTab]);

  return (
    <div>
      <ol 
        className="tab-list"
        role="tablist"
        aria-label="List of tabs"
        onKeyDown={handleKeyPress}
      >
        {children.map((item, index) => (
          <Title
            key={index}
            index={index + 1}
            id={item.props.id}
            title={item.props.title}
            isActive={selectedTab === index + 1}
            setSelectedTab={setSelectedTab}
            tabRef={tabsRef[index]}
          />
        ))}
      </ol>
      <div>
        {children[selectedTab - 1]}
      </div>
    </div>
  )
};

export default Tabs