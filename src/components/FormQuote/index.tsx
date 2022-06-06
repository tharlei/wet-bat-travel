import { FormEvent, useEffect, useState } from 'react';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputEnum, OptionData } from '../../components/Inputs/InputEnum';
import { InputNumber } from '../../components/Inputs/InputNumber';
import { InputText } from '../../components/Inputs/InputText';
import { Loading } from '../Loading';
import { CreateQuoteService } from '../../services/CreateQuoteService';
import { ListTransportOptionsService } from '../../services/ListTransportOptionsService';

export function FormQuote() {
  const [from, setFrom] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departDate, setDepartDate] = useState<string>('');
  const [retureDate, setRetureDate] = useState<string>('');
  const [people, setPeople] = useState<number>(1);
  const [transportationId, setTransportationId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [transportOptions, setTransportOptions] = useState<OptionData[]>([]);

  useEffect(() => {
    getTransports();
  });

  async function getTransports(): Promise<void> {
    const options = await new ListTransportOptionsService().handle();
    setTransportOptions(options);
  }

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

    await new CreateQuoteService().handle(quote);

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
          options={transportOptions}
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
