export interface InputProps {
  placeholder: string;
}
export const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className="rounded border border-gray-600 p-2 text-gray-400"
      placeholder={placeholder}
    />
  );
};
