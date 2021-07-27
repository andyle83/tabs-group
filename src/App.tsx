import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";

function App() {
  return (
    <div style={{ "padding": "10px 20px" }}>
      <Tabs>
        <Tab title="Home" id="home">
          <form>
            <label>Home Panel - Tab to get focus:</label><br />
            <textarea rows={5} cols={40}/><br />
            <input type="submit" value="Submit" />
          </form>
        </Tab>
        <Tab title="Profile" id="profile">
          <form>
            <label>Profile Panel - Tab to get focus:</label><br />
            <textarea rows={5} cols={40}/><br />
            <input type="submit" value="Submit" />
          </form>
        </Tab>
        <Tab title="Contact" id="contact">
          <form>
            <label>Contact Panel - Tab to get focus:</label><br />
            <textarea rows={5} cols={40}/><br />
            <input type="submit" value="Submit" />
          </form>
        </Tab>
      </Tabs>
    </div>
  )
};

export default App;