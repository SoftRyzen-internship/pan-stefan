import { useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import formField from './formFields';
import Idata from './Idata';
import fieldsParams from './fieldsParams';
import axios from 'axios';
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

  const onSubmitHandler = (data: Idata) => {
    const TELEGRAM_TOKEN = '5921706384:AAE8BqSi4TTNxh8yEp7nEOhBvIv4ejYBjVQ';
    const TELEGRAM_CHAT_ID = '-1001866687565';
    const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    let message = `
      <b> Ім'я: ${data.username}</b>
      <b> Телефон: ${data.phone}</b>
      <b> Комментар: ${data.comment}</b>
    `;
    axios.post(URI_API, {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
    reset();
    setIsSending(true);
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
