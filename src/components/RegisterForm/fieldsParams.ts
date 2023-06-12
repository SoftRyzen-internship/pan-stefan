type ValidationFunction = (value: string) => boolean | string;

const fieldsParams: {
  [key: string]: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    validate?: { noText: ValidationFunction };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
} = {
  username: {
    validate: {
      noText: (value: string) => !!value.match(/^(?!\s*$).+/) || `Не може містити лише пробіли`,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: '*Тільки літери, пробіл, тире, апостроф',
    },
    required: `*Це поле обов'язкове`,
    minLength: {
      value: 2,
      message: `Введіть не менше 2 символів`,
    },
    maxLength: {
      value: 70,
      message: `Введіть не більше 70 символів`,
    },
  },

  phone: {
    required: `*Це поле обов'язкове`,
    pattern: {
      value: /^(\+380)\d{9}$/,
      message: '*Введіть у форматі +380000000000',
    },

    maxLength: {
      value: 13,
      message: '*Не може бути більшим за 13 цифр',
    },
  },

  comment: {
    required: `*Це поле обов'язкове`,
    pattern: {
      value: /[^\s]/,
      message: '*Повинно містити символи',
    },
    minLength: {
      value: 2,
      message: 'Введіть не менше 2 символів',
    },
    maxLength: {
      value: 200,
      message: 'Введіть не більше 200 символів',
    },
  },
};

export default fieldsParams;
