# Веб-сайт компании Евросвязь, СПб, 2020

> Мой проект по разработке интерактивного веб-сайта для петербургской компании
> "Евросвязь".

## Установка и запуск проекта

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Обновление калога
- скачиваем прайс.xlsx;
- нормализуем структуру заголовков;
- конвертируем в .csv (>,\`);
- нормализуем заголовки;
- нормализуем строки товара;
- расставить уровни заголовков;
- закрываем массивы одиночки;
- маркируем закрывающие скобки одиночек соответствующим номером;
- закрываем оставшиеся массивы по переходам с большего на меньший уровень;
- удаляем уже ненужную маркировку закрывающих скобок;
- формируем объекты вокруг массивов;
- удаляем номера в полях "name:";
- присваиваем уникальный порядковый номер каждому заголовку;
- нарезаем на отдельные файлы по рубрикам первого уровня.
