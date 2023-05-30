const fieldsParams = {
  username: {
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
      value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      message: '*Не вірний формат номеру',
    },
    minLength: {
      value: 5,
      message: '*Не вірний формат номеру',
    },
    maxLength: {
      value: 10,
      message: '*Не вірний формат номеру',
    },
  },

  comment: {
    minLength: {
      value: 2,
      message: 'Коментар маж містити не менше 2 символів',
    },
    maxLength: {
      value: 200,
      message: 'Коментар маж містити не більше 200 символів',
    },
  },
};

export default fieldsParams;
