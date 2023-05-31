import IFieldProps from './IFieldProps';

function FormInput(props: IFieldProps) {
  const { data, reg, errors, options } = props;
  const { type, name, label } = data;

  return (
    <div className="relative">
      <label htmlFor={`formField${name}`} className="hidden ">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          cols={42}
          {...reg(name, options)}
          id={`formField${name}`}
          aria-label={label}
          className=" p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light"
        />
      ) : (
        <input
          id={`formField${name}`}
          className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light`}
          type={type}
          {...reg(name, options)}
          name={name}
          placeholder={label}
          aria-label={label}
        />
      )}

      <div className="absolute bottom-0 left-0 text-base text-red-80">
        {errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
}

export default FormInput;
