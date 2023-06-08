import nodemailer from 'nodemailer';

import createMail from './helpers/createMail';
import nodemailerConfig from './helpers/nodemailerConfig';

import type { NextApiResponse } from 'next';
import FormInputs from 'components/WorkForm/WorkFormTypes';

export default async function sendToGmail(req: { body: FormInputs }, res: NextApiResponse) {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const mail = createMail(process.env.NEXT_PUBLIC_GMAIL_MAILOWNER, req.body);

  transporter.sendMail(mail, function (error) {
    if (error) {
      return res.status(404).json(error.message);
    }
    return res
      .status(200)
      .json({ message: 'За наявності вакансії вам зателефонують' });
  });
}
