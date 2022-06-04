import { BsChevronDown } from 'react-icons/bs';

interface InputEnumProps {
  label: string;
  setValue: (value: string) => void;
  options: {
    value: string;
    title: string;
  }[];
}

export function InputEnum({ label, options, setValue }: InputEnumProps) {
  return (
    <div className="flex relative items-center">
      <div className="flex flex-col w-full">
        <label className="uppercase text-gray-900 text-xs -mb-6 ml-2 z-10">
          {label}
        </label>
        <select
          required
          onChange={(event) => setValue(event.target.value)}
          className="bg-gray-100 rounded border-0 pt-8"
        >
          <option></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <BsChevronDown className="text-cyan text-2xl h-full absolute font-bold right-3 bg-gray-100 z-20" />
    </div>
  );
}
