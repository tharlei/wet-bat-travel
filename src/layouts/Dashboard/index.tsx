import { Header } from '../../components/Header';
import { SideMenu } from '../../components/SideMenu';

interface DashboardProps {
  children?: React.ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <Header />
      <section className="flex justify-center">
        <SideMenu />
        <main className="px-4 w-full">{children}</main>
      </section>
    </>
  );
}
