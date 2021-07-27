import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Tabs from './Tabs';
import Tab from './Tab';

describe('<Tabs />', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Tabs>
        <Tab id="home" title="Home">Home</Tab>
        <Tab id="profile" title="Profile">Profile</Tab>
      </Tabs>, 
    div);
  });

  it('should renders with first tab get focus', () => {
    render(
      <Tabs>
        <Tab id="home" title="Home">Home</Tab>
        <Tab id="profile" title="Profile">Profile</Tab>
      </Tabs>
    );
    const firstTab = screen.getAllByRole("tab")[0];
    expect(firstTab.getAttribute("tabindex")).toBe("0");
  });
});