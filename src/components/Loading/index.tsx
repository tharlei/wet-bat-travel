import { TbLoader } from 'react-icons/tb';

export function Loading() {
  return (
    <div className="flex items-center justify-center">
      <TbLoader className="animate-spin font-bold text-2xl text-cyan text-center" />
    </div>
  );
}
