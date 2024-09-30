import { theme, utils } from "@nel-ui/foundations";
import { createNELStyles } from "@nel-ui/wrapper-react";
import cn from "classnames";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    gap: utils.px(10),
    "& > li": {
      background: theme.plaqueBlue300,
      borderRadius: utils.px(100),
      textIndent: utils.px(-5000),
      width: utils.px(50),
    },
  },
};

export const useStepperStyles = createNELStyles(styles, { name: "Stepper" });

type StepperProps = {
  className?: string;
};

export function Stepper({ className }: StepperProps) {
  const classes = useStepperStyles();
  return (
    <ol className={cn(className, classes.container)}>
      <li>Step 1</li>
      <li>Step 2</li>
      <li>Step 3</li>
      <li>Step 4</li>
      <li>Step 5</li>
      <li>Step 6</li>
    </ol>
  );
}
