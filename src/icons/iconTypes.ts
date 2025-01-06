export type SizeTypes = "sm" | "md" | "lg";
export interface IconProps {
  size: SizeTypes;
}

export const iconSizeStyles: Record<SizeTypes, string> = {
  sm: "size-2",
  md: "size-4",
  lg: "size-6",
};

export const defaultIconStyles = `cursor-pointer`;

//------------------------------------------------------------

export interface LoadIconProps {
  size: SizeTypes;
}
export const LoadingStyles: Record<SizeTypes, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};
