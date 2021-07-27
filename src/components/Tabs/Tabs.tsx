import React, { ReactElement, useState } from "react";
import Title from "./Title";

import './styles.css';

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <ol className="tab-list">
        {children.map((item, index) => (
          <Title
            key={index}
            index={index}
            title={item.props.title}
            isActive={selectedTab === index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ol>
      <div>
        {children[selectedTab]}
      </div>
    </div>
  )
};

export default Tabs