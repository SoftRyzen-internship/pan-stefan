import FormNotificationProps from './FormNotificationTypes';

function FormNotification(props: FormNotificationProps) {
  const { forOrdering, subText, forError } = props;
  return (
    <div className="before:w-[106px] before:h-[130px] before:bg-[url('./../../public/assets/images/notification/notification-bg.png')] before:content='' before:absolute before:bottom-[14px] before:left-[3%] bg-no-repeat text-center">
      <h2 className="max-w-[242px] mx-auto mb-[24px] text-[32px] leading-[1.12] text-purple-80 font-cormorant">
        {forError
          ? 'Упссс...'
          : forOrdering
          ? 'Дякуємо за замовлення'
          : 'Заявка успішно відправлена'}
      </h2>
      <p
        className={`${
          forError ? 'text-red-400' : 'text-[#222222]'
        } max-w-[242px] mx-auto leading-[24px]`}
      >
        {subText}
      </p>
    </div>
  );
}

export default FormNotification;
