import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  link: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface ProductProps {
  Picture: string;
  Series: string;
  Model: string;
  Features: string[];
  Lens: string;
  Zoom: string;
  IRDistance: string;
  Laser: string;
  WDR: string;
  Size: string;
  MicroSDCardStorage: string;
  BuiltInMic: boolean;
  AI: string;
  IO: string;
  BuiltInSpeaker: boolean;
  Protection: string;
  OnBoardStorage: string;
  Material: string;
  Price: number;
}
