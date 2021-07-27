# Tabs Group

This is a `tabs-demo` application for an accessible tabs list component that follow WAI ARIA specification.

Here is a sample syntax to create a tabs list

```
<Tabs>
  <Tab id="profile" title="Profile">Profile content</Tab>
  <Tab id="contact" title="Contact>Contact content</Tab>
</Tabs>
```

### Features

The Tabs list component following WAI ARIA specification with some basic features:

- A tab list (`Tabs`) can have 2 or more `Tab`. Each `Tab` can contain any other HTML / React UI components 
- Each tab will have a title. 
  - When a tab is select, the title will be highlight
  - When user click on each tab, the tab panel will show the content
  - By default, tab group has focus on the first tab, and display the corresponding tab panel's content

### Command to run demo application

Using following command to run / test application:

- `npm run start`: Running `tabs-demo` in `htt://localhost:3000`
- `npm run test`: Running unit test scripts
### Limitation / Improvement

- Tabs List has to contain more than 1 Tab. It must support for a single Tab as well
- Tabs List should have more control on Tab, for example: set default focus Tab component
- Support Enter / Home / End / Delete keyboard events
- Need to implement some properties: `aria-labelledby`, `aria-haspopup`
- Adding more unit test to cover focus and keyboard events handler