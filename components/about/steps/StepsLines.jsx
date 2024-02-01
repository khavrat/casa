import { useState, useRef, useEffect } from "react";
import texts from "../../../data/texts.json";
import { StarEl } from "../../reusableComponents/starElement/StarElement";
import { List, Step } from "./StepsLines.styled";

export const StepsLines = () => {
  const [hoveredSteps, setHoveredSteps] = useState(Array(8).fill(false));
  const stepRefs = Array.from({ length: 8 }, () => useRef(null));
  const timeoutIds = useRef(Array(8).fill(null));

  const handleMouseEnter = (index) => {
    setHoveredSteps((prev) => prev.map((_, i) => (i === index ? true : _)));
  };

  const handleMouseLeave = (index) => {
    timeoutIds.current[index] = setTimeout(() => {
      setHoveredSteps((prev) => prev.map((_, i) => (i === index ? false : _)));
    }, 5000);
  };

  const handleFocus = (index) => {
    clearInterval(timeoutIds.current[index]); 
    setHoveredSteps((prev) => prev.map((_, i) => (i === index ? true : _)));
  };

  const handleBlur = (index) => {
    timeoutIds.current[index] = setTimeout(() => {
      setHoveredSteps((prev) => prev.map((_, i) => (i === index ? false : _)));
    }, 5000);
  };

  useEffect(() => {
    return () => {
      timeoutIds.current.forEach((id) => {
        clearTimeout(id); 
      });
    };
  }, []);


  return (
    <List>
      {[...Array(8)].map((_, index) => (
        <Step
          key={index}
          tooltip={texts.about.steps[`step${index + 1}`]}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
          isHovered={hoveredSteps[index]}
          ref={stepRefs[index]}
          tabIndex="0"
        >
          <StarEl />
        </Step>
      ))}
    </List>
  );
};
