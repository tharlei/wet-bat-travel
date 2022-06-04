import { Card } from '../../components/Card';
import { FormQuote } from '../../components/FormQuote';
import { TbPlayerTrackNext } from 'react-icons/tb';

export function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 mt-4 w-full">
        <Card title="Quick quote" icon={TbPlayerTrackNext}>
          <FormQuote />
        </Card>
      </div>
    </>
  );
}
