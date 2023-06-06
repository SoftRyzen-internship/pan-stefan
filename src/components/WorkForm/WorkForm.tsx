import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';
import FormNotification from 'components/FormNotification/FormNotification';
import Loader from 'components/Loader/Loader';

import workFormFields from './workFormFields';
import workFieldsParams from './workFieldsParams';
import { IWorkFormData, InitialFormState } from './WorkFormTypes';

function WorkForm() {
  const [state, setState] = useState<InitialFormState>({
    isSending: false,
    error: false,
    finalMessage: null,
  });
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
    axios
      .post('api/sendToGmail', formData)
      .then(({ data }) => {
        setState(prevState => ({ ...prevState, isSending: false, finalMessage: data.message }));
        reset();
      })
      .catch(error => {
        setState(prevState => ({
          ...prevState,
          error: true,
          isSending: false,
          finalMessage: 'Щось пішло не так',
        }));
      });
  };

  return !error && !finalMessage ? (
    <div className="relative">
      <h2
        className={`font-cormorant font-semibold text-center text-purple-80 mb-[32px] md:mb-[40px] xl:mb-[60px] text-[32px] leading-[1.2] md:text-[40px] xl:text-5xl`}
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
        <Button type="submit" text="Відправити" centered xwide></Button>
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
