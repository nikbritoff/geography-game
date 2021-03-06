# Игра в географию

[Демо игры](https://nikbritoff.github.io/geography-game/)

## Описание

Суть игры - выбрать правильно страну и город. На экране выводятся кнопки - это города и страны из объекта. Кнопки должны быть в рандомном порядке (при каждом запуске игры новый порядок). Первый клик выбираем город или страну, она меняет цвет на синий. Второй клик - если клик был на правильную пару, то эта пара пропадает с экрана. Если пара неверная, то обе кнопки подсвечиваются красным, до момента пока не совершим новый клик на другую кнопку. После того как на экране не останется кнопок - выводим текст - ВЫ ВЫИГРАЛИ.


### Требования

- В объекте правильной парой всегда считается ключ и его значение;
- Использование TypeScript обязательно;
- Хранение и обработку данных необходимо реализовать в Redux. Можно использовать любые побочные инструменты к нему. (В качестве задания со звездочкой - можно сохранять прогресс игры между сессиями браузера. Но если игра была закончена, то следующий запуск страницы начинается с новой игры);
- Стилизация свободная, главное учесть цвета кнопок указанные в задании;
- Ограничения по времени нет, поэтому рекомендуется сделать упор на качестве кода:)
- Результат принимается в любом удобном виде - codesandbox/репозиторий/архив.

### Исходные данные

В качестве исходных данных есть объект:
{
	Russia: “Moscow”,
	Japan: “Tokyo”,
	Germany: “Berlin”,
	France: “Paris”
}