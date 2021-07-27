# Tabs List

This is a `tabs-demo` application for an **accessible** Tabs list component following **WAI ARIA** specifications.

Here is a sample syntax to create a tabs list

```
<Tabs>
  <Tab id="profile" title="Profile">Profile content</Tab>
  <Tab id="contact" title="Contact>Contact content</Tab>
</Tabs>
```

### Features

The Tabs list component following WAI ARIA specification with some basic features:

- A tab list (`Tabs`) can have 2 or more `Tab`. Each `Tab` can contain any other HTML / React UI components.
- Each Tab will have a title.
  - When a Tab is select, the Title will be highlight.
  - When user click on each Tab, the Tab Panel will show the content.
  - By default, Tabs List has focus on the first Tab, and display the corresponding Tab Panel's content.

### Command to run demo application

Using following command to run / test application:

- `npm run start`: Running `tabs-demo` in `htt://localhost:3000`.
- `npm run test`: Running unit test scripts.
### Limitation / Improvement

- Tabs List has to contain more than one Tab. It must support for a single Tab as well.
- Tabs List should have more control on Tab, for example: set default focus Tab component.
- Tabs List should have separated `Panel` components to handle more features or extendable.
- Support Enter / Home / End / Delete keyboard events.
- Need to implement some properties: `aria-labelledby`, `aria-haspopup`, `hidden`.
- Adding more unit test to cover focus and keyboard events handler.