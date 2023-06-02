import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import workFormFields from './workFormFields';
import workFieldsParams from './workFieldsParams';
import { IWorkFormData, InitialFormState } from './WorkFormTypes';

function WorkForm() {
  const [state, setState] = useState<InitialFormState>({ isSending: false, error: false, finalMessage: null });
  const { isSending, error, finalMessage } = state;

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      phone: '',
      age: '',
      comment: '',
    },
    mode: 'all',
  });

  const onSubmitHandler = (formData: IWorkFormData) => {
    setState(prevState => ({ ...prevState, isSending: true }));
    axios.post('api/sendToGmail', formData).
    then(({ data }) => {
      setState(prevState => ({ ...prevState, isSending: false, finalMessage: data.message }));
      reset();
      })
      .catch(error => {
        setState(prevState => ({ ...prevState, error: true, isSending: false, finalMessage: error.message }));
      });
  };

  return !error && !finalMessage ? (
    <div className='relative'>
      <h2
        className={`font-cormorant font-semibold text-center text-purple-80 mb-[32px] md:mb-[40px] xl:mb-[60px] text-[32px]/[39px] md:text-[40px]/[48px] xl:text-[48px]/[58px]`}
      >
        Хочу <br />
        працювати
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        aria-label="Форма запису на роботу"
        className=""
      >
        {workFormFields.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            errors={errors}
            options={workFieldsParams[field.name as keyof typeof workFieldsParams]}
          />
        ))}
        <Button type="submit" text="Відправити" centered xwide></Button>
    </form>
    {isSending && <p className='absolute top-[50%] left-[50%] text-[70px] translate-x-[-50%] translate-y-[-50%] text-red-600'>spinner...</p>}
  </div>
  ) : (<p className={`${error ? 'text-red-600' : 'text-green-600'}`}>{finalMessage}</p>);
}

export default WorkForm;
