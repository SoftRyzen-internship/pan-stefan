import { UseFormRegister } from 'react-hook-form';

interface IFieldProps {
  data: {
    name: string;
    type: string;
    label: string;
  };
  reg: UseFormRegister<any>;
  errors?: any;
  options: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: { value: RegExp; message: string };
  };
}

export default IFieldProps;
