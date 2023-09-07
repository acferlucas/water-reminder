import { styled } from "../../styles";

export const Slider = styled("input", {
  width: "100%",
  height: "8px",
  appearance: "none",
  backgroundColor: "$gray-200",
  borderRadius: "4px",
  outline: "none",
  opacity: "0.7",
  transition: "opacity 0.2s",

  "&:hover": {
    opacity: "1",
  },
  "&::-webkit-slider-thumb": {
    appearance: "none",
    width: "18px",
    height: "18px",
    backgroundColor: "$blue",
    borderRadius: "50%",
    cursor: "pointer",

    '&:active' : {
      boxShadow: "8px 8px 24px #7FC4ED",
    }
  },

  "&::-moz-range-thumb": {
    width: "16px",
    height: "16px",
    backgroundColor: "$blue",
    borderRadius: "50%",
    cursor: "pointer",
  },
});
