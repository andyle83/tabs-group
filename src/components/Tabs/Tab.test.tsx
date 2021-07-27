import ReactDOM from 'react-dom';
import Tab from './Tab';

describe('<Tab />', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab id="profile" title="Profile" />, div);
  });

  it('should render with child component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab id="profile" title="Profile">Content Demo</Tab>, div);
  })
});