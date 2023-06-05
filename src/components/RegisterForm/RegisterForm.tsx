import { useForm } from 'react-hook-form';
import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import formField from './formFields';
import Button from '../Button/Button';
import FormNotification from '../FormNotification/FormNotification';

import Idata from './RegisterFormTypes';
import { InitialFormState } from '../WorkForm/WorkFormTypes';
import sendToTlg from '@/services/api/sendToTlg';
import fieldsParams from './fieldsParams';

function RegisterForm() {
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
      comment: '',
    },
    mode: 'all',
  });

  const onSubmitHandler = async (data: Idata) => {
    try {
      setState(prevState => ({ ...prevState, isSending: true, error: false }));
      const result = await sendToTlg(data);
      if (result.ok) {
        setState(prevState => ({ ...prevState, isSending: false, finalMessage: 'Незабаром наш менеджер звʼяжеться з вами' }));
        reset();
      }
    } catch (error) {
      setState(prevState => ({ ...prevState, isSending: false, error: true, finalMessage: 'Щось пішло не так' }));
    }
  };

  return !error && !finalMessage ? (<div className='relative'>
      <h2
        className={`font-cormorant font-semibold text-center text-purple-80 mb-[32px] md:mb-[40px] xl:mb-[60px] text-[32px]/[39px] md:text-[40px]/[48px] xl:text-[48px]/[58px]`}
      >
        Зробити <br />
        замовлення
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        aria-label="Форма замовлення продукції"
        className=""
      >
        {formField.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            errors={errors}
            options={fieldsParams[field.name as keyof typeof fieldsParams]}
          />
        ))}
        <Button type="submit" text="Замовити" centered xwide></Button>
    </form>
    {isSending && <p className='absolute top-[50%] left-[50%] text-[70px] translate-x-[-50%] translate-y-[-50%] text-red-600'>spinner...</p>}
    </div>) :(error ? <FormNotification forOrdering forError subText={finalMessage} /> : <FormNotification forOrdering subText={finalMessage} />);
}

export default RegisterForm;
