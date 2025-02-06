import { ReactElement } from "react";

export type Variants = "primary" | "secondary";
export type sizeVariants = "sm" | "md" | "lg";
export interface ButtonProps {
  variant: Variants;
  size: sizeVariants;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  loadIcon?: ReactElement;
  loading?: boolean;
  onClick?: () => void;
}

// Recommended : use maps or records over here
const variantStyles: Record<Variants, string> = {
  primary: "bg-gradient-to-b from-blue-500 to-blue-600 text-white  hover:text-white hover:bg-blue-700 ",
  secondary: "bg-blue-100 text-blue-500 hover:bg-blue-200  ",
};

const sizeStyles: Record<sizeVariants, string> = {
  sm: "text-sm font-bold py-1 px-2",
  md: "text-md font-semibold py-2 px-2.5",
  lg: "text-lg font-semibold py-2 px-4",
};

const defaultStyles = "flex justify-center items-center gap-2 shadow-sm w-full rounded-md";

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`${variantStyles[props.variant]} ${
          sizeStyles[props.size]
        } ${defaultStyles} 
      `}
      >
        {props.loading ? (
          <>{props.loadIcon}</>
        ) : props.startIcon ? (
          <>
            {props.startIcon} {props.text}
          </>
        ) : (
          props.text
        )}
      </button>
    </div>
  );
};
