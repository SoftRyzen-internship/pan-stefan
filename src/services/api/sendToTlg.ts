import Idata from '@/components/RegisterForm/Idata';
import axios from 'axios';

const sendToTlg = async (data: Idata, setIsError: any) => {
  const tgbot = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${tgbot}/sendMessage`;
  let message = `
      <b> Ім'я: ${data.username}</b>
      <b> Телефон: ${data.phone}</b>
      <b> Комментар: ${data.comment}</b>
    `;

  axios
    .post(URI_API, {
      chat_id: chat_id,
      parse_mode: 'html',
      text: message,
    })
    .catch(function (error) {
      setIsError(true);
    });
};

export default sendToTlg;
