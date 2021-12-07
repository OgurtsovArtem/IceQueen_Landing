**_[ICEQUEEN - Deployed](https://icequeen-cryo.com/cryo/kriokapsula/)_**
**_[ICEQUEEN - DEMO](https://ogurtsovartem.github.io/IceQueen_Landing/)_**
========================================

## Запуск проекта
-----------------------------------
```
npx gulp
```

### Собрать иконки после запуска
-----------------------------------
```
npx gulp create-svg-sprite
```

### Использование миксинов в проекте
-----------------------------------
1. @mixin adaptive-value - Адаптирует значения под размер экрана;

__Пример: "margin" @include adaptive-value("margin", 50, 40, 1);__

```
1 - "css свойство",
2 - максимальное значение;
3 - минимальное значение на минмальном разрешении(подробнее см. style.scss);
4 - разрешение экрана при котором будет применено минмальное значение;
```
2. @mixin font - Создает шаблон шрифтов для css

```
Используется сборщиком (gulp) в функции **fontsCreator**
```

### Анимации
-----------------------------------
>Для применения анмации при скроле добавте дежурный класс **_animation** нужному блоку;

>При достижении блока видимой части экрана к данному блоку добавиться еще один дежурный класс **_active-animation** сигнализирующий о начале анимации;

>Базовые стили классов **_animation** и **_active-animation** для анимации блоков заданы в **ui.scss**;



### Popup
-----------------------------------
#### html
Для работы popup необходимо добавить технический класс главному блоку **_popup**

##### Close
>Для закрытия **Popup** нужно повешать технический класс **_popup-close** на нужный вам элемент

>Так же есть возможно закрывать Popup по клику вне области для этого добавте технический класс **_popup-close-area** области закрытия

##### Open
>Для открытия **Popup** добавте **data-popup=" _название popup'a_ "** нужному элементу на странице _(Важно! см.js)_

#### js
>При добвлении нового **popup'a** нужно добавить в обьект **popupNames** название для дата-атрибута (_data-popup_).

>В фунции **popupHandler** добавить условие **if** для нового **popup'a** и не забыть получить новые элементы из обьекта **popupNames**


### Аккордион
-----------------------------------
>Чтобы инициализировать аккордион добавте блоку со спойлерами **data-accordions**

>Вложенным спойлерам(блокам) добавить класс **data-accordion**

>Внутри вложенных блоков добавить **data-accordion-button** кнопке, при клике на которую будет выдвигаться контент

>Внутри вложенных блоков добавить **data-accordion-content** контенту