import "./App.css";
import {
  Link,
  List,
  ListItem,
  P,
  Overline,
  H3,
  Expander,
  Accordion,
  NELProvider,
  createNELStyles,
} from "@nel-ui/react";
import { Stepper } from "./components/Stepper.tsx";
import { utils } from "@nel-ui/foundations";

const useStyles = createNELStyles({
  foo: utils.spaceTracker(),
  p: utils.verticalSpacer(5),
});

function App() {
  const classes = useStyles();

  return (
    <NELProvider>
      <H3>Make a budget</H3>
      <Stepper className="my-stepper" totalSteps={5} currentStep={3} />
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
      <Accordion
        items={[
          {
            id: "1",
            heading: "Heading",
            children: "Content",
          },
        ]}
      />
      <div className={classes.foo}>
        <P className={classes.p}>Hello!</P>
      </div>
    </NELProvider>
  );
}

export default App;
