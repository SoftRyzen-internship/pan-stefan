import { useForm } from 'react-hook-form';
import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import formField from './formFields';
import Button from '../Button/Button';

import sendToTlg from '@/services/api/sendToTlg';
import Idata from './Idata';
import fieldsParams from './fieldsParams';

function RegisterForm() {
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

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
      sendToTlg(data, setIsError);
      setIsSending(true);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return isSending ? (
    <>
      {isError ? (
        <div className="text-red-800">ErrorNotification</div>
      ) : (
        <div className="text-purple-80">Notification</div>
      )}
    </>
  ) : (
    <div>
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
    </div>
  );
}

export default RegisterForm;
