const workFieldsParams: {
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
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
} = {
  username: {
    required: `*Це поле обов'язкове`,
    pattern: {
      value: /[^\s]/,
      message: '*Повинно містити символи',
    },
    minLength: {
      value: 2,
      message: `Ім'я повинно містити не менше 2 символів`,
    },
    maxLength: {
      value: 70,
      message: `Ім'я повинно містити не більше 70 символів`,
    },
  },

  phone: {
    required: `*Це поле обов'язкове`,
    pattern: {
      value: /^(\+380)\d{9}$/,
      message: '*Введіть номер у такому форматі +380670000000',
    },
    minLength: {
      value: 5,
      message: '*Номер не може бути меншим за 5 цифр',
    },
    maxLength: {
      value: 13,
      message: '*Номер не може бути більшим за 13 цифр',
    },
  },

  age: {
    required: `*Це поле обов'язкове`,
    pattern: {
      value: /^\d+$/,
      message: '*Введіть будь ласка лише цифри',
    },
    minLength: {
      value: 2,
      message: '*Введіть не меньше 2 цифр',
    },
    maxLength: {
      value: 3,
      message: '*Введіть не більше 3 цифр',
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
      message: '*Коментар має містити не менше 2 символів',
    },
    maxLength: {
      value: 200,
      message: '*Коментар має містити не більше 200 символів',
    },
  },
};

export default workFieldsParams;
