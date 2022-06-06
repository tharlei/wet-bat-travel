import { BsChevronDown } from 'react-icons/bs';

export interface OptionData {
  value: string;
  label: string;
}

interface InputEnumProps {
  label: string;
  setValue: (value: string) => void;
  options: OptionData[];
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
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <BsChevronDown className="text-cyan text-2xl h-full absolute font-bold right-3 bg-gray-100 z-20" />
    </div>
  );
}
