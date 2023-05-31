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
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
} = {
  username: {
    pattern: {
      value: /[^\s]/,
      message: '*Повинно містити символи',
    },
    required: `*Це поле обов'язкове`,
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
      message: '*Не вірний формат номеру',
    },
    minLength: {
      value: 5,
      message: '*Не вірний формат номеру',
    },
    maxLength: {
      value: 13,
      message: '*Не вірний формат номеру',
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
      message: 'Коментар має містити не менше 2 символів',
    },
    maxLength: {
      value: 200,
      message: 'Коментар має містити не більше 200 символів',
    },
  },
};

export default fieldsParams;
