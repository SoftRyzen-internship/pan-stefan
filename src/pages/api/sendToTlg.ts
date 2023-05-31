import type { NextApiRequest, NextApiResponse } from 'next';

const sendToTlg = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  let message = `
      <b> Ім'я: ${body.username}</b>
      <b> Телефон: +${body.phone}</b>
      <b> Комментар: ${body.comment}</b>
    `;
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_TELEGRAM_CHAT_ID;
  try {
    await fetch(
      `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=HTML`
    );
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    console.log(res);
    res.status(400).json({ status: 'Failed' });
  }
};

export default sendToTlg;
