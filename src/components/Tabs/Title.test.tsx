import React from "react";
import ReactDOM from 'react-dom';
import Title from './Title';
import { render } from '@testing-library/react';

describe('<Title />', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    const setSelectedTab = () => {};
    const tabRef = React.createRef<HTMLButtonElement>();

    ReactDOM.render(
      <Title
        id="profile"
        title="Profile"
        isActive={false}
        index={0}
        setSelectedTab={setSelectedTab}
        tabRef={tabRef}
      />, div);
  });

  it('should renders with correct highligh when being active', () => {
    const setSelectedTab = () => {};
    const tabRef = React.createRef<HTMLButtonElement>();

    const { container } = render(
      <Title
        id="profile"
        title="Profile"
        isActive={true}
        index={0}
        setSelectedTab={setSelectedTab}
        tabRef={tabRef}
      />);
    expect(container.getElementsByClassName("tab-item-active").length).toBe(1);
  });
});