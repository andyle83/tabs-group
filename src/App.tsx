import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";

function App() {
  return (
    <div style={{ "padding": "10px 20px"}}>
      <Tabs>
        <Tab title="Tab 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tab>
        <Tab title="Tab 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Libero enim sed faucibus turpis in eu mi. Morbi non arcu risus quis varius quam quisque id
        </Tab>
        <Tab title="Tab 3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tab>
      </Tabs>
    </div>
  )
};

export default App;