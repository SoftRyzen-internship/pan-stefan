import { useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import formField from './formFields';
import Idata from './Idata';
import fieldsParams from './fieldsParams';
import sendToTlg from '@/pages/api/sendToTlg';
import { useState } from 'react';
import Button from '../Button/Button';

function RegisterForm() {
  const [isSending, setIsSending] = useState(false);

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
      fetch('/api/sendToTlg', {
        method: 'post',
        body: JSON.stringify(data),
      });
      setIsSending(true);
    } catch (error) {
      console.log('oops');
    } finally {
      reset();
    }
  };

  return isSending ? (
    <div>Notification</div>
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
