import "./App.css";
import { Link } from "@nel-ui/link-react";
import { List, ListItem } from "@nel-ui/list-react";
import { P, Overline } from "@nel-ui/typography-react";
import { Expander } from "@nel-ui/expander-react";
import { NELProvider } from "@nel-ui/react";
import { Stepper } from "./components/Stepper.tsx";

function App() {
  return (
    <NELProvider>
      <Stepper className="my-stepper" />
      <Link href="http://google.com">Link</Link>
      <List variant="tick">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
      <P lead>Paragraph</P>
      <P>Paragraph</P>
      <Overline>Overline</Overline>
      <Expander id="1" summary="THis is the summary">
        <P>This is the content</P>
      </Expander>
    </NELProvider>
  );
}

export default App;
