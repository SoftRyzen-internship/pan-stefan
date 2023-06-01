import nodemailer from 'nodemailer';

import type { NextApiResponse } from 'next';
import IWorkFormData from '@/components/WorkForm/IWorkFormData';

export default async function (req: { body: IWorkFormData }, res: NextApiResponse) {
  // const data = JSON.parse(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'kievdrum1983',
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    }

  });
  const mail = {
    from: 'kievdrum1983@gmail.com',
    to: 'kievdrum1983@gmail.com',
    subject: req.body.username,
    text: req.body.comment,
  };
  transporter.sendMail(mail, function (error, info) {
    if (error) {
      return res.status(404).json(error.message);
    } 
    return res.status(200).json({ message: 'Дякуємо за замовлення. Незабаром наш менеджер звʼяжеться з вами' });
  });
  

}