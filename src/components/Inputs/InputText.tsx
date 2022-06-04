interface InputTextProps {
  setValue: (value: string) => void;
  label: string;
}

export function InputText({ label, setValue }: InputTextProps) {
  return (
    <div className="flex flex-col">
      <label className="uppercase text-gray-900 text-xs -mb-6 ml-2 z-10">
        {label}
      </label>
      <input
        required
        type="text"
        onChange={(event) => setValue(event.target.value)}
        className="bg-gray-100 rounded border-0 pt-8 "
      />
    </div>
  );
}
