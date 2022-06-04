import { BsChevronDown } from 'react-icons/bs';

interface InputNumberProps {
  label: string;
  setValue: (value: number) => void;
  min?: number;
}

export function InputNumber({ label, min, setValue }: InputNumberProps) {
  return (
    <div className="flex relative items-center">
      <div className="flex flex-col w-full">
        <label className="uppercase text-gray-900 text-xs -mb-6 ml-2 z-10">
          {label}
        </label>
        <input
          required
          type="number"
          min={min}
          onChange={(event) => setValue(Number(event.target.value))}
          className="bg-gray-100 rounded border-0 pt-8 "
        />
      </div>
      <BsChevronDown className="text-cyan text-2xl h-full absolute font-bold right-3 bg-gray-100 z-20" />
    </div>
  );
}
