const nodemailerConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
    },
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
};

export default nodemailerConfig;
