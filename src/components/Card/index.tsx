import { IconType } from 'react-icons';

interface CardProps {
  children?: React.ReactNode;
  icon: IconType;
  title: string;
}

export function Card({ children, title, icon: Icon }: CardProps) {
  return (
    <div className="bg-white rounded-lg border-gray-500 border py-4 w-full">
      <div className="flex items-center gap-4 px-4">
        <Icon className="text-cyan text-2xl" />
        <h3 className="text-2xl text-purple">{title}</h3>
      </div>
      <div className="border-b mt-2"></div>
      {children}
    </div>
  );
}
