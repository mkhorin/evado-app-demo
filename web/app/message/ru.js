'use strict';
/**
 * Extend default translations
 *
 * Use: Jam.t('Some text')
 * Use: <span data-t="">Some text</span>
 * Use: <div title="Some text" data-t=""></div>
 * Use: <input placeholder="Some text" type="text" data-t="">
 */
Object.assign(Jam.I18n.defaults, {

    'Attribute "Float" must be greater than attribute "Number"': 'Атрибут "Вещественное" должен быть больше, чем "Число"',

    'Value should contain at least {min} chr. (sum String and Email lengths)': 'Значение должно содержать не менее {min} смв. (сумма длин атрибутов Строка и Email)',
});

/**
 * Define custom translation category
 *
 * Use: Jam.t('Some text', 'custom')
 * Use: <span data-t="custom">Some text</span>
 * Use: <div title="Some text" data-t="custom"></div>
 * Use: <input placeholder="Some text" type="text" data-t="custom">
 * Use: <div title="Some text" data-t-title="custom" data-t="">Text</div>
 */
Jam.I18n.custom = {

    'Some text': 'Некоторый текст'
};

/**
 * Metadata translation category
 *
 * meta - all metadata
 * meta.class.className - class metadata
 * meta.class.className.view.viewName - class view metadata
 */
Jam.I18n.meta = {

    'Abstract class': 'Абстрактный класс',
    'Action binders': 'Настройки действий',
    'Active child': 'Активный наследник',
    'Active descendants': 'Активные потомки',
    'Address': 'Адрес',
    'Age': 'Возраст',
    'Any': 'Любой',
    'Archive': 'Архивировать',
    'Archived': 'Архивированно',
    'Article': 'Статья',
    'Articles': 'Статьи',
    'Attribute from parent class': 'Атрибут из родительского класса',
    'Attribute from the Abstract parent class': 'Атрибут из абстрактного родительского класса',
    'Attribute from the Active child class': 'Атрибут из активного дочернего класса',
    'Attribute from the Child class': 'Атрибут из дочернего класса',
    'Attribute from the Grandchild class': 'Атрибут из внучатого класса',
    'Attribute from the Inactive child class': 'Атрибут из неактивного дочернего класса',
    'Attribute from the Parent class': 'Атрибут из родительского класса',
    'Attribute from the Parent class. Default value is overridden in the Child class': 'Атрибут из родительского класса. Значение по умолчанию переопределенно в дочернем классе',
    'Attribute from the Real child class': 'Атрибут из реального дочернего класса',

    'Back references from linked objects': 'Обратная ссылка из связанного объекта',
    'Bad': 'Плохо',
    'Behaviors': 'Поведения',
    'Blue': 'Синий',
    'Blue hint': 'Синия подсказка',
    'Blue-black': 'Синие-чёрный',
    'Blue-yellow': 'Синие-жёлтый',
    'Boolean': 'Логическое',
    'Bottom attribute hint': 'Нижняя подсказка атрибута',

    'CSS classes are inherited from a column container': 'CSS классы унаследованы от контейнера колонок',
    'Calculated values': 'Вычисляемые значения',
    'Calculate the sum of all values of the Counter attribute of the Calculation source class': 'Вычислить сумму всех значений атрибута "Счётчик" класса Calculation source',
    'Calculate the sum of the values of the previous attributes': 'Вычислить сумму значений предыдущих атрибутов',
    'Calculation source': 'Источник вычислений',
    'Categories': 'Категории',
    'Category': 'Категория',
    'Check to set the test value': 'Включите, чтобы установить тестовое значение',
    'Check to trigger actions': 'Включите, чтобы вызвать действия',
    'Check to trigger group actions': 'Включите, чтобы вызвать групповое действия',
    'Child attribute': 'Дочерний атрибут',
    'Child class': 'Дочерний класс',
    'Check an integer and a range of 10 - 100': 'Проверить целое число в диапазоне 10 - 100',
    'Check an unique and required value': 'Проверить уникальность и обязательность значения',
    'Check an unique email': 'Проверить уникальность email',
    'Check min length as sum "String" and "Email" lengths': 'Проверить минимальную длину как сумму длин "Строки" и "Email"',
    'Close for changes': 'Закрыть от изменений',
    'Color': 'Цвет',
    'Comments': 'Комментарии',
    'Compare with attribute "Number"': 'Сравнение с атрибутом "Число"',
    'Counter': 'Счётчик',
    'Counter sum': 'Сумма счётчиков',
    'Created at': 'Дата создания',
    'Creation view': 'Представление создания',
    'Creator': 'Создатель',
    'Custom': 'Пользовательское',
    'Custom date format from attribute options': 'Пользовательский формат даты из опций атрибута',

    'Data source': 'Источник данных',
    'Date': 'Дата',
    'Date and time with time zone': 'Дата и время с часовым поясом',
    'Date and time without time zone': 'Дата и время без часового пояса',
    'Date of creation of this object': 'Дата создания этого объекта',
    'Date of modification of this object': 'Дата модификации этого объекта',
    'Date with time': 'Дата и время',
    'Date with time zone (for example an event timestamp)': 'Дата с часовым поясом (например, метка времени события)',
    'Date without time zone (for example a birthday)': 'Дата без часового пояса (например, дата рождения)',
    'Dates': 'Даты',
    'Description': 'Описание',
    'Draft': 'Черновик',
    'Draft view': 'Представление черновика',
    'Dynamic nodes': 'Динамические пункты',

    'Edit': 'Редактировать',
    'Editing view': 'Представление редактирования',
    'Editor': 'Редактор',
    'Enumeration source': 'Источник перечислений',
    'Enumerations': 'Перечисления',
    'Extended attribute hint': 'Расширенная подсказка атрибута',
    'Extended hint\nSecond attribute hint line\nThird hint line': 'Расширенная подсказка\nВторая срока подсказки\nТретья строка посказки',

    'File': 'Файл',
    'File ID in storage': 'Идентфикатор файла в хранилище',
    'Filename is used when downloading': 'Имя файла используется при скачивании',
    'Files': 'Файлы',
    'First': 'Первый',
    'First name': 'Имя',
    'First plus second': 'Первый плюс второй',
    'Float': 'Вещественное',
    'Full name': 'Полное имя',

    'Go to editing': 'Перейти к редактированию',
    'Go to rate': 'Перейти к оценке',
    'Good': 'Хорошо',
    'Grandchild attribute': 'Внучатый атрибут',
    'Grandchild class': 'Внучатый класс',
    'Group hint': 'Подсказка группы',
    'Group is loaded on expanding': 'Группа загружаемая при раскрытии',
    'Group tracked': 'Групповое отслеживание',
    'Grouping attributes': 'Группировка атрибутов',

    'Hash': 'Хэш',

    'In the Latest version the Text attribute is optional and string': 'В последней версии класса текстовый атрибут необязателен и строковый',
    'In the Original version the Text attribute is required': 'В исходной версии класса текстовый атрибут обязателен',
    'Inactive child': 'Неактивный наследник',
    'Information': 'Информация',
    'Inheritance': 'Наследование',
    'Input mask': 'Маска ввода',
    'Input some value to show the last name attribute': 'Введите значение, чтобы показать атрибут Фамилия',
    'Integer': 'Целочисленное',
    'Integer value for calculation': 'Целое значение для вычислений',
    'Integer value with input mask': 'Целое значение с маской ввода',
    'Integers with default value': 'Целые числа со значением по умолчанию',

    'Last name': 'Фамилия',
    'Latest version': 'Последняя версия',
    'Local date': 'Локальная дата',
    'Local date with time': 'Докальная дата и время',

    'Metadata class': 'Класс метаданных',
    'Multiline text value': 'Многострочное текстовое значение',
    'Multiple references to linked objects': 'Связь с множеством объектов',

    'Name': 'Название',
    'Navigation': 'Навигация',
    'Nested group (all group attributes become read-only)': 'Вложенная группа (все атрибуты группы только для чтения)',
    'Number': 'Число',

    'Object identifier': 'Идентификатор объекта',
    'Only this attribute is in the creation view': 'Только этот атрибут в представлении создания',
    'Order number': 'Порядковый номер',
    'Original version': 'Исходная версия',

    'Parent attribute': 'Родительский атрибут',
    'Parent class': 'Родительский класс',
    'Published': 'Опубликовано',

    'Radio list view': 'Представление список radio-кнопок',
    'Rate': 'Оценить',
    'Rating': 'Оценка',
    'Rating state': 'Состояние оценки',
    'Rating view': 'Представление оценки',
    'Read-only value mask': 'Значение только для чтения с маской',
    'Reading mask': 'Маска чтения',
    'Real child': 'Реальный наследник',
    'Red': 'Красный',
    'Red-black': 'Красно-чёрный',
    'Red-yellow': 'Красно-желтый',
    'Reference types': 'Ссылочные типы',
    'Required string value': 'Обязательное строковое значение',
    'Required string value with a history of changes': 'Обязательное строковое значение с историей изменений',

    'S3 files': 'Файлы S3',
    'Second': 'Второй',
    'Select one value from the list': 'Выберите одно значение из списка',
    'Select box': 'Список выбора',
    'Service data': 'Служебные данные',
    'Service data of file hash': 'Служебное значение хэша файла',
    'Service data of file size': 'Служебное значение размера файла',
    'Service data of file type': 'Служебное значение типа файла',
    'Shade': 'Оттенок',
    'Simple data': 'Простые данные',
    'Simple group': 'Простая группа',
    'Single reference with a select box view to a linked object': 'Одиночная связь с представлением список выбора',
    'Size': 'Размер',
    'Start date': 'Дата старта',
    'State': 'Состояние',
    'String': 'Строка',
    'System user who created this object': 'Системный пользователь, создавший объект',
    'System user who updated this object': 'Системный пользователь, изменивший объект',

    'Tab 1': 'Вкладка 1',
    'Tab 2': 'Вкладка 2',
    'Tab hint': 'Подсказка вкладки',
    'Tab is loaded on activation': 'Вкладка загружаемая при активации',
    'Target planet': 'Целевая планета',
    'Text': 'Текст',
    'Tracked': 'Отслеживаемый',
    'The current list of values depends on the value of the Color attribute': 'Текущий список значений зависит от значения атрибута "Цвет"',
    'The current state of this object': 'Текущее состояние объекта',
    'The source of values are objects of the Enumeration source class (shown only published)': 'Источником значений являются объекты класса Enumeration source (показаны только опубликованные)',
    'This attribute is available for modification in the Draft state': 'Этот атрибут доступен для изменения в состоянии черновика',
    'This attribute is available for modification in the Rating state': 'Этот атрибут доступен для изменения в состоянии оценки',
    'This attribute is read-only in the edit view': 'Этот атрибут только для чтения в представлении редактирования',
    'This is a required attribute in the edit view': 'Этот атрибут обязательный в представлении редактирования',
    'Transition confirmation: Go back to editing this object?': 'Подтверждение перехода: Вернуться к редактированию этого объекта?',
    'Type': 'Тип',

    'Updated at': 'Дата изменения',

    'Validation': 'Валидация',
    'Value is set via class custom behavior': 'Значение устанавливается через пользовательское поведение класса',
    'Value receiver': 'Получатель значения',
    'Value toggle': 'Включатель значения',
    'Versioning': 'Версионирование',
    'Views': 'Представления',

    'Workflow': 'Бизнес-процесс'
};
Jam.I18n['meta.class.className'] = {

};
Jam.I18n['meta.class.className.view.viewName'] = {

};