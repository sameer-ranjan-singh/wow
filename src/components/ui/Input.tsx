
export type HtmlInputElement = HTMLInputElement | undefined 
export interface InputProps {
  placeholder: string
  type: string 
  reference: any
}
export const Input = ({ placeholder, type, reference }: InputProps) => {
  return (
    <input
      ref={reference}
      type={type}
      className="rounded border border-gray-300 p-2 text-gray-400 focus:text-black active:border active:border-none"
      placeholder={placeholder}
    />
  );
};
