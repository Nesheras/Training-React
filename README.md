
## Основной функционал

- Загрузка 20 избранных фильмов по версии API.
- Регистрация и авторизация пользователей.
- Избранные карточки: пользователь может сохранять или удалять фильмы из избранных.


### 1 уровень 

- [x] Реализованы Требования к функциональности.

- React

- [x] Пишу функциональные **[компоненты](src/Components) c хуками в приоритете над классовыми.** 
- [x] Есть разделение на **[умные](src/Components/Header/Search/Search.jsx) и **[глупые](src/Components/Input/Input.jsx)** компоненты 
- [x] Есть рендеринг **[списков](src/Components/CardContainer/CardContainer.jsx)**
- [x] Реализована хотя бы одна **[форма](src/Pages/SignIn/SignInPage.jsx)**
- [x] Есть применение **[Контекст API](src/App/store/api/Context.jsx)**
- [x] Есть применение **[предохранителя](src/App.jsx)**
- [x] Есть хотя бы один кастомный **[хук](src/App/store/api/hooks)**
- [x] Хотя бы несколько компонентов используют PropTypes [](src/components/Suggests/suggests.jsx) [history](src/pages/history/components/history-item.jsx)
- [x] Поиск не триггерит много запросов к серверу [debounce](src/App/store/api/hooks/use-debounce.js) 
- [x] Есть применение [lazy + Suspense](src/routes/CustomRouter.jsx)


- Redux

- [x] Использую [Modern Redux with Redux Toolkit](src/App/store.js)
- [x] Использую [слайсы](src/App/store/api/Slices)
- [x] Есть хотя бы одна кастомная [мидлвара](src/App/store/api/logerMw.js)
- [x] Использую [RTK Query](src/App/store/api/kinopoiskApi.js)
- [x] Использую [Transforming Responses](src/App/store/api/transformRespons/)

### 2 уровень 

- [x] Использую [Firebase](src/firebase.js)
