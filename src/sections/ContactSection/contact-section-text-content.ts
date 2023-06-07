import FacebookIcon from '@/public/assets/icon/facebook-ikon.svg';
import TiktokIcon from '@/public/assets/icon/tiktok-icon.svg';
import InstagranIcon from '@/public/assets/icon/instagram-icon.svg';

const headerText = 'Контакти';

const address = {
  title: 'Фізична адреса: ',
  description: 'м.Дніпро, Космонавтів, 2',
  link: 'https://goo.gl/maps/LCsNYnTTnqPPQFJV7',
};
const phone = {
  title: 'Номер телефону: ',
  description: '+380972789350',
  link: 'tel:+380972789350',
};
const email = {
  title: 'Адреса електронної пошти: ',
  description: 'olgaosipenko.j2@gmail.com',
  link: 'mailto:olgaosipenko.j2@gmail.com',
};
const social = {
  title: 'Соцмережі: ',
  description: [
    {
      name: 'facebook',
      src: FacebookIcon,
      link: 'https://www.facebook.com/profile.php?id=100091247531055',
    },
    {
      name: 'tiktok',
      src: TiktokIcon,
      link: 'https://www.tiktok.com/@user6911244765268?is_from_webapp=1&sender_device=pc',
    },
    {
      name: 'instagram',
      src: InstagranIcon,
      link: 'https://instagram.com/_pan_stefan_dnipro?igshid=NTc4MTIwNjQ2YQ==',
    },
  ],
  link: '',
};

const imageAltText = 'Карта міста Дніпро з геометкою розташування магазину';

const contact = [address, phone, email, social];

const aboutUsSectionTextContent = { headerText, contact, imageAltText };

export default aboutUsSectionTextContent;
