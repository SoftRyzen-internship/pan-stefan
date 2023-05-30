import IFieldProps from './IFieldProps';

function FormInput(props: IFieldProps) {
  const { data, reg, errors, options } = props;
  const { type, name, label } = data;
  console.log(data, options);
  return (
    <div className="">
      <label htmlFor="formField" className="hidden ">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          cols={42}
          {...reg(name)}
          id="formField"
          aria-label={label}
          className="p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light"
        />
      ) : (
        <input
          id="formField"
          className={`p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light`}
          type={type}
          {...reg(name)}
          name={name}
          placeholder={label}
          aria-label={label}
        />
      )}

      <div className="absolute top-[48px] md:top-[75px] left-6 text-base text-purple-30">
        {errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
}

export default FormInput;
