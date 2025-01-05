import { ReactElement } from "react"
import { LoadingIcon } from "../../icons/LoadingIcon"

export type Variants = "primary" | "secondary"
export type sizeVariants = "sm" | "md" | "lg"
export interface ButtonProps {
    variant : Variants
    size : sizeVariants
    text : string
    startIcon? : ReactElement
    endIcon? : ReactElement
    loadIcon? : ReactElement
    loading : boolean
    onClick : ()=> void
}

// Recommended : use maps or records over here
const variantStyles : Record<Variants, string> ={
    primary: "bg-purple-600 text-white hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600",
    secondary: "bg-purple-300 text-purple-600 hover:bg-black hover:text-white "
}

const sizeStyles : Record<sizeVariants, string> ={
    sm: "text-sm font-bold rounded-sm py-1 px-2",
    md: "text-md font-semibold rounded-md py-2 px-4",
    lg: "text-lg font-semibold rounded-md py-2 px-4"
}

const defaultStyles = "m-2 flex justify-center items-center gap-2 shadow-sm"

export const Button = (props: ButtonProps) => {

 return (
    <button 
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}
      `}
    >
      {props.loading ? (
        <>{props.loadIcon}</>
        ):(
          props.startIcon ? <>{props.startIcon} {props.text}</> : props.text
          

        )}
    </button>
    )
}