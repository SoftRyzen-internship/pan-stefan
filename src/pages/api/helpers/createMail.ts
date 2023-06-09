import { MailOwner } from './createMailTypes';
import FormInputs from 'components/WorkForm/WorkFormTypes';

function createMail(mailOwner: MailOwner, senderInfo: FormInputs) {
  const { username, phone, age, comment } = senderInfo;
  return {
    from: mailOwner,
    to: mailOwner,
    subject: 'Нова заявка на вакансію',
    text: `Доброго дня, мене звати ${username}, мій телефон ${phone}, мені ${age} років.\n${comment}`,
  };
}

export default createMail;
