import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('<App />', () => {
  it('renders tabs group application without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should renders with first tab get focus', () => {
    render(<App />);
    const firstTab = screen.getAllByRole("tab")[0];
    expect(firstTab.getAttribute("tabindex")).toBe("0");
  });
});