import { Clipboard } from "../Clipboard";

type Props = {
  placeholder?: string;
  value: string;
  onChange?: (e: { target: { value: any } }) => void;
  disabled?: boolean;
  copyToClipboard?: boolean;
  label?: string;
};

export function TextArea({ label, placeholder, copyToClipboard, disabled, value, onChange }: Props) {
  return (
    <div className="h-full flex flex-col">
      <label className="text-zinc-50 mb-2 font-medium">{label}</label>
      <textarea
        className={`
          border-solid 
          border-2 
          border-zinc-500 
          rounded-md
          p-4
          bg-zinc-700
          text-zinc-50
          placeholder-zinc-500
          w-96
          h-full
          resize-none
          outline-none
          
          focus:border-teal-500

          disabled:bg-zinc-600
        `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
    </div>
  );
}
