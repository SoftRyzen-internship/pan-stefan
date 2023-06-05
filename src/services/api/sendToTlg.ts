import Idata from '@/components/RegisterForm/Idata';
import axios from 'axios';

const sendToTlg = async (formData: Idata) => {
  const tgbot = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${tgbot}/sendMessage`;
  let message = `
      <b> Ім'я: ${formData.username}</b>
      <b> Телефон: ${formData.phone}</b>
      <b> Комментар: ${formData.comment}</b>
    `;

  const { data } = await axios
    .post(URI_API, {
      chat_id: chat_id,
      parse_mode: 'html',
      text: message,
    });
  return data;
};

export default sendToTlg;
