import { FormEvent, useEffect, useState } from 'react';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputEnum, OptionData } from '../../components/Inputs/InputEnum';
import { InputNumber } from '../../components/Inputs/InputNumber';
import { InputText } from '../../components/Inputs/InputText';
import { Loading } from '../Loading';
import { CreateQuoteService } from '../../services/CreateQuoteService';
import { ListTransportOptionsService } from '../../services/ListTransportOptionsService';
import cogoToast from 'cogo-toast';

export function FormQuote() {
  const [from, setFrom] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departDate, setDepartDate] = useState<string>('');
  const [retureDate, setRetureDate] = useState<string>('');
  const [amountPeople, setAmountPeople] = useState<number>(1);
  const [transportId, setTransportId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [transportOptions, setTransportOptions] = useState<OptionData[]>([]);

  useEffect(() => {
    getTransports();
  }, []);

  async function getTransports(): Promise<void> {
    const options = await new ListTransportOptionsService().handle();
    setTransportOptions(options);
  }

  async function handleSubmitCreateQuote(event: FormEvent): Promise<void> {
    event.preventDefault();
    setLoading(true);

    const quote = {
      from,
      destination,
      departDate,
      retureDate,
      amountPeople,
      transportId,
      name,
    };

    try {
      await new CreateQuoteService().handle(quote);
      cogoToast.success('Quote created success!', {
        position: 'bottom-center',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      event.target.reset();
    } catch (error) {
      cogoToast.error('Please, check data filled', {
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
        <InputNumber label="People" min={1} setValue={setAmountPeople} />
        <InputEnum
          label="Transporation"
          options={transportOptions}
          setValue={setTransportId}
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
