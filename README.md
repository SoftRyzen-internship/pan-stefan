# Проект для кондитерської "Pan Stefan"

<img src="public/assets/images/hero/Hero%402x.png" alt="Лого компанії Pan Stefan" width='100px' style="fill: red;" />

Це репозиторій проекту "Pan Stefan", який є веб-додатком для кондитерської "Pan Stefan". Додаток
реалізований з використанням **Next.js**, **TypeScript** та стилізований за допомогою **Tailwind
CSS**. Сайт кондитерської "Pan Stefan" є одно-сторінковим, створеним для презентації продукції та
послуг цієї кондитерської.

## Пере-використовувані компоненти

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

У нашому проекті "Pan Stefan" ми використовуємо кілька малих пере-використовуваних компонентів, які
можуть бути легко використані для побудови веб-інтерфейсу, а саме:

### Кнопка

Компонент "Button" використовується для створення інтерактивних кнопок на веб-сторінці. Він має
наступні пропси:

- type (Обов'язковий. Тільки два значення: 'button' | 'submit'.)
- text (текст кнопки)
- onClick (необов’язковий. Функція, яка виконується при натисканні на кнопку)
- lightHover (необов’язковий. Якщо вказаний - ефект ховера змінюється на "text-пурпурний, bg-білий")
- long (необов’язковий. Вказується без значення. Якщо вказаний - кнопка стає 240рх шириною.)
- centetred (необов’язковий. Вказується без значення. Центрує)
- xwide (необов'язковий, кнопка буде на 100% ширини)

Приклад використання:

```javascript
<Button type="submit" text="Замовити зараз" onClick={handleClick} centetred />
```

### Заголовок

Компонент "SectionHeader" використовується для створення заголовків розділів або блоків на
веб-сторінці. Він має наступні пропси:

- Hero (необов’язковий, якщо не вказаний – застосовуються стилі для заголовка звичайної секції, якщо
  вказаний – будуть застосовані окремі стилі для великого тексту для Hero)
- Text (обов’язковий, текст заголовка)
- Centered (необов’язковий, вказується без значення, якщо вказаний – заголовок центрується)
- Colored (необов’язковий, вказується без значення, якщо вказаний – колір пурпурний, якщо ні –
  білий)

Приклад використання:

```javascript
<Heading text="Про нас" Hero Centered Colored />
```

### Поле вводу (input)

Компонент "FormInput" використовується для створення різних форм на веб-сторінці. Він має наступні
пропси:

- data (об'єкт { name - текст; type: тип поля (наприклад, text, email); label: текст (label) або
  плейсхолдера})
- reg (reg={register} - register функція з UseForm)
- errors (errors={errors} - функія помилки)
- options (об'єкт, де вказани параметри для валідації. наприклад: required: "*Це поле обов'язкове",
  pattern: { value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, message: '*Не вірний формат номеру'})

Приклад використання:

```javascript
<FormInput
          data={field}
          reg={register}
          errors={errors}
          options={workFieldsParams[field.name as keyof typeof workFieldsParams]}/>
```

### Ви можете переглянути макет проекту "Pan Stefan" [за посиланням тут.](https://www.figma.com/file/QwMYiKCk8yjSTzrSsdlaOG/Pan-Stefan?node-id=0-1)

## Сайт "Pan Stefan" складається з наступних секцій:

1. Головна:

Ця секція привертає увагу користувачів і надає загальну інформацію про кондитерську "Pan Stefan".

2. Про нас:

Секція, що містить детальну інформацію про кондитерську "Pan Stefan", включаючи її історію, цінності
та команду фахівців.

3. Продукція:

У цій секції представлена широка гама вишуканих десертів, які пропонує "Pan Stefan". Кожен десерт
супроводжується зображенням, описом та ціною.

4. Вакансії:

В даній секції розміщена інформація про актуальні вакансії, доступні у кондитерській "Pan Stefan".
Здійснюється запрошення для тих, хто бажає приєднатися до нашої талановитої команди.

5. Фотогалерея:

Секція, де можна переглянути красиві фотографії десертів та інтер'єру кондитерської "Pan Stefan".

6. Контакти:

У цій секції наведені контактні дані, такі як адреса, телефон та електронна пошта, для зв'язку з
кондитерською "Pan Stefan".

Сайт має хедер, в якому розміщена навігація по сторінці за допомогою скролінгу, що дозволяє
користувачам швидко переходити до різних секцій сайту.
