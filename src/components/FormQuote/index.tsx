import { FormEvent, useState } from 'react';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputEnum } from '../../components/Inputs/InputEnum';
import { InputNumber } from '../../components/Inputs/InputNumber';
import { InputText } from '../../components/Inputs/InputText';
import { Loading } from '../Loading';
import cogoToast from 'cogo-toast';
import { CreateQuoteService } from '../../services/createQuoteService';

const TRANSPORATIONS = [
  {
    value: 'ea4fac1f-9d46-4ba9-a58d-701b8b9dfe99',
    title: 'Rental car',
  },
  {
    value: '48dd55bb-a3a2-4cfe-8f7c-e8f61bb953da',
    title: 'Bicycle',
  },
  {
    value: '0f253543-02b3-4d8e-9dcd-f9283a07c57f',
    title: 'Boat',
  },
  {
    value: '9b33c564-ffe8-4d2a-8da2-654089cf1766',
    title: 'Train',
  },
];

export function FormQuote() {
  const [from, setFrom] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departDate, setDepartDate] = useState<string>('');
  const [retureDate, setRetureDate] = useState<string>('');
  const [people, setPeople] = useState<number>(1);
  const [transportationId, setTransportationId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmitCreateQuote(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    const quote = {
      from,
      destination,
      departDate,
      retureDate,
      people,
      transportationId,
      name,
    };

    try {
      await new CreateQuoteService().handle(quote);
      cogoToast.success('Quote created success!', {
        position: 'bottom-center',
      });
    } catch (error) {
      cogoToast.error('Please, try again later...', {
        position: 'bottom-center',
      });
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmitCreateQuote}
      className="px-4 lg:px-8 mt-8 flex flex-col gap-8"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <InputText label="From" setValue={setFrom} />
        <InputText label="Destination" setValue={setDestination} />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <InputDate label="Depart Date" setValue={setDepartDate} />
        <InputDate label="Reture Date" setValue={setRetureDate} />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <InputNumber label="People" min={1} setValue={setPeople} />
        <InputEnum
          label="Transporation"
          options={TRANSPORATIONS}
          setValue={setTransportationId}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <InputText label="Name" setValue={setName} />
        {loading ? (
          <Loading />
        ) : (
          <button className="p-4 bg-cyan rounded-full text-white text-xl hover:bg-opacity-80 transition-all duration-300">
            Create a quote
          </button>
        )}
      </div>
    </form>
  );
}
