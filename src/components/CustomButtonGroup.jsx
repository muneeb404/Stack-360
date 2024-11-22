import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import { ArrowButton } from "./ArrowBtn";
export const CustomButtonGroup = ({ next, previous }) => {
    return (
      <>
        <ArrowButton direction="left" onClick={previous} icon={leftArrow} />
        <ArrowButton direction="right" onClick={next} icon={rightArrow} />
      </>
    );
  };
  