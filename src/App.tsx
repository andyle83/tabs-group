import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";

function App() {
  return (
    <div style={{ "padding": "10px 20px" }}>
      <Tabs>
        <Tab title="Home" id="home">
          So oft have I invoked thee for my Muse, And found such fair assistance in my verse As every alien pen hath got my use And under thee their poesy disperse. Thine eyes, that taught the dumb on high to sing And heavy ignorance aloft to fly, Have added feathers to the learned's wing And given grace a double majesty. Yet be most proud of that which I compile, Whose influence is thine, and born of thee:
        </Tab>
        <Tab title="Profile" id="profile">
          No more be griev'd at that which thou hast done: Roses have thorns, and silver fountains mud: Clouds and eclipses stain both moon and sun, And loathsome canker lives in sweetest bud. All men make faults, and even I in this, Authorizing thy trespass with compare, Myself corrupting, salving thy amiss, Excusing thy sins more than thy sins are; For to thy sensual fault I bring in sense,-- Thy adverse party is thy advocate,--
        </Tab>
        <Tab title="Contact" id="contact">
          If my dear love were but the child of state, It might for Fortune's bastard be unfather'd, As subject to Time's love or to Time's hate, Weeds among weeds, or flowers with flowers gather'd. No, it was builded far from accident; It suffers not in smiling pomp, nor falls Under the blow of thralled discontent, Whereto th' inviting time our fashion calls: It fears not policy, that heretic, Which works on leases of short-number'd hours,
        </Tab>
      </Tabs>
    </div>
  )
};

export default App;