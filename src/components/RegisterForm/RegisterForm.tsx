import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useState } from 'react';

import FormInput from 'components/FormInput/FormInput';
import formField from './formFields';
import Button from 'components/Button/Button';
import FormNotification from 'components/FormNotification/FormNotification';
import Loader from 'components/Loader/Loader';

import FormInputs from './RegisterFormTypes';
import sendToTlg from 'services/api/sendToTlg';
import fieldsParams from './fieldsParams';

function RegisterForm() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  const STORAGE_KEY = 'registerForm';
  
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'all',
  });
  
  const isBrowser = typeof window != 'undefined';
  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? window.sessionStorage : undefined,
  });
  
  
  const onSubmitHandler = async (data: FormInputs) => {
    try {
      setIsSending(true);
      const result = await sendToTlg(data);
      if (result.ok) {
        setIsSending(false);
        setFinalMessage('Незабаром наш менеджер звʼяжеться з вами');
        reset();
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      setIsSending(false);
      setError(true);
      setFinalMessage('Щось пішло не так');
    }
  };

  return !error && !finalMessage ? (
    <div className="relative">
      <h2
        className={`font-cormorant font-semibold text-center text-purple-80 mb-[32px] md:mb-10 xl:mb-[48px] text-[32px] leading-[1.2] md:text-[40px] xl:text-5xl`}
      >
        Зробити <br />
        замовлення
      </h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {formField.map((field, ind) => (
          <FormInput
            key={ind}
            data={field}
            reg={register}
            errors={errors}
            options={fieldsParams[field.name as keyof typeof fieldsParams]}
          />
        ))}
        <Button type="submit" text="Замовити" centered xwide />
      </form>
      {isSending && <Loader />}
    </div>
  ) : error ? (
    <FormNotification forOrdering forError subText={finalMessage} />
  ) : (
    <FormNotification forOrdering subText={finalMessage} />
  );
}

export default RegisterForm;
