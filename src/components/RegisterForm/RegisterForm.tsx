import { useForm } from 'react-hook-form';
import { PropsWithChildren, FC } from 'react';
import FormInput from '../FormInput/FormInput';
import formField from './formFields';
import Idata from './Idata';
import fieldsParams from './fieldsParams';

function RegisterForm() {
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
    reset();
    console.log(data);
  };

  return (
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

      <button type="submit">submit</button>
    </form>
  );
}

export default RegisterForm;
