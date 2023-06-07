const nodemailerConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'kievdrum1983',
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
};

export default nodemailerConfig;