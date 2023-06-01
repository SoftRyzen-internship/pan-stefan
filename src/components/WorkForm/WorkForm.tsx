import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import workFormFields from './workFormFields';
import IWorkFormData from './IWorkFormData';
import workFieldsParams from './workFieldsParams';
import { useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

function WorkForm() {
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

  // const onSubmitHandler: SubmitHandler<IWorkFormData> = async (formData) => {
  const onSubmitHandler = (formData: IWorkFormData) => {
    reset();
    setIsSending(true);
    axios.post('api/sendToGmail', formData).
      then(({ data }) => {
        setIsSending(false);
        console.log(data.message);
      })
      .catch(err => {
        setIsSending(false);
        console.log(err.message);
      });
  };

  return isSending ? (
    <div>Notification</div>
  ) : (
    // Тут буде нотифікація
    <div>
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
    </div>
  );
}

export default WorkForm;
