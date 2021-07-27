import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import { render } from '@testing-library/react';

describe('<Title />', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    const setSelectedTab = () => {};
    ReactDOM.render(<Title title="Profile" isActive={false} index={0} setSelectedTab={setSelectedTab} />, div);
  });

  it('should renders with correct highligh when being active', () => {
    const setSelectedTab = () => {};
    const { container } = render(<Title title="Profile" isActive={true} index={0} setSelectedTab={setSelectedTab} />);
    expect(container.getElementsByClassName("tab-item-active").length).toBe(1);
  });
});