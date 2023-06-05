import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader/SectionHeader';

import useBreakpoints from '@/services/hooks/useBreakpoints';

import aboutUsSectionTextContent from './contact-section-text-content';
import contactMapImage from '../../../public/assets/images/contact/contact-map-image.png';
import InstagramIcon from '../../../public/assets/icon/instagram-icon.svg';

function ContactSection() {
  const { headerText, contact, imageAltText } = aboutUsSectionTextContent;
  const { less768px, bigger1280px } = useBreakpoints();

  return (
    <section id="Пронас" className={`section relative bg-purple-30 md:py-[80px] xl:pb-[126px] `}>
      <div className="container">
        <SectionHeader text={headerText} />
        <div className="md:flex  md:justify-between content-end">
          <ul>
            {contact.map((el, ind) => (
              <li key={ind} className=" mb-10 last:mb-0">
                <p className="text-xl mb-4">{el.title}</p>
                {typeof el.description !== 'object' ? (
                  <a href={el.link} target="blank" className="hover:text-purple-80  transition-all">
                    {el.description}
                  </a>
                ) : (
                  <ul className="flex">
                    {Object.values(el.description).map((item, ind) => (
                      <li key={ind} className="mr-5 last:mr-0">
                        <a href={item.link} target="blank">
                          <item.src className="fill-white hover:fill-purple-80 w-11 h-11 mr-5 last:mr-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div
            className={`relative ${
              less768px ? 'w-[280px]' : bigger1280px ? 'w-[800px]' : 'w-[336px]'
            } ${less768px ? 'h-[340px]' : bigger1280px ? 'h-[436x]' : 'h-[412px]'}`}
          >
            <Image
              className="md:order-1 ml-auto object-cover"
              src={contactMapImage}
              alt={imageAltText}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;