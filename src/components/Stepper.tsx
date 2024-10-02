import f, { theme, utils } from "@nel-ui/foundations";
import { createNELStyles } from "@nel-ui/react";
import cn from "classnames";

console.log(f);

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    gap: utils.px(10),
    "& > li": {},
  },
  item: {
    background: theme.plaqueBlue300,
    borderRadius: 100,
    textIndent: -5000,
    width: 50,
  },
  active: {
    background: theme.plaqueBlue800,
  },
};

const useStepperStyles = createNELStyles(styles, { name: "Stepper" });

type StepperProps = {
  totalSteps: number;
  currentStep: number;
  className?: string;
};

export function Stepper({ totalSteps, currentStep, className }: StepperProps) {
  const classes = useStepperStyles();
  return (
    <ol className={cn(className, classes.container)}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <li
          key={i}
          className={cn(
            classes.item,
            currentStep === i + 1 ? classes.active : undefined,
          )}
        >
          {i + 1}
        </li>
      ))}
    </ol>
  );
}
