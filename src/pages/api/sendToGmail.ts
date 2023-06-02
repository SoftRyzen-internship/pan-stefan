import nodemailer from 'nodemailer';

import createMail from './helpers/createMail';
import nodemailerConfig from './helpers/nodemailerConfig';

import type { NextApiResponse } from 'next';
import { IWorkFormData } from '../../components/WorkForm/WorkFormTypes';

export default async function (req: { body: IWorkFormData }, res: NextApiResponse) {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const mail = createMail('kievdrum1983@gmail.com', req.body);

  transporter.sendMail(mail, function (error) {
    if (error) {
      return res.status(404).json(error.message);
    }
    return res
      .status(200)
      .json({ message: 'Дякуємо за замовлення. Незабаром наш менеджер звʼяжеться з вами' });
  });
}
