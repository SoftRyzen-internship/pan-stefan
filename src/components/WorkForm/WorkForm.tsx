import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import axios from 'axios';

import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';
import FormNotification from 'components/FormNotification/FormNotification';
import Loader from 'components/Loader/Loader';

import workFormFields from './workFormFields';
import workFieldsParams from './workFieldsParams';
import FormInputs from './WorkFormTypes';

function WorkForm() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  
  const STORAGE_KEY = 'workForm';
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormInputs>(
    {
      mode: 'all',
    }
  );
  
  const isBrowser = typeof window != 'undefined';
  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });

  const onSubmitHandler = (formData: FormInputs) => {
    setIsSending(true);
    axios
      .post('api/sendToGmail', formData)
      .then(({ data }) => {
        setIsSending(false);
        setFinalMessage(data.message);
        reset();
          sessionStorage.removeItem(STORAGE_KEY);
      })
      .catch(error => {
        setIsSending(false);
        setError(true);
        setFinalMessage('Щось пішло не так');
      });
  };

  return !error && !finalMessage ? (
    <div className="relative">
      <h2
        className={`font-cormorant font-semibold text-center text-purple-80 mb-[32px] md:mb-[40px] xl:mb-[24px] text-[32px] leading-[1.2] md:text-[40px] xl:text-5xl`}
      >
        Хочу <br />
        працювати
      </h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {workFormFields.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            errors={errors}
            options={workFieldsParams[field.name as keyof typeof workFieldsParams]}
          />
        ))}
        <Button type="submit" text="Відправити" centered xwide />
      </form>
      {isSending && <Loader />}
    </div>
  ) : error ? (
    <FormNotification forError subText={finalMessage} />
  ) : (
    <FormNotification subText={finalMessage} />
  );
}

export default WorkForm;
