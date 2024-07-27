import logo from '../../img/logo.svg';

export const Footer = () => {
    return <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-column">
        <p class="logo">
          <img src={logo} width="100" height="106" alt="Логотип яхт клуба"/>
        </p>
        <p class="policy"><a href="#">Политика конфиденциальности</a></p>
        <p class="copyright">Яхтклуб ©2020 Все права защищены</p>
      </div>
      <ul class="footer-navigation-topics">
        <li class="footer-navigation-topic">
          <h2>Компания</h2>
          <ul class="footer-navigation">
            <li class="footer-navigation-item">
              <a href="#">О нас</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Команда</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Новости</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Блог</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Галерея</a>
            </li>
          </ul>
        </li>
        <li class="footer-navigation-topic">
          <h2>Яхт-клуб</h2>
          <ul class="footer-navigation">
            <li class="footer-navigation-item">
              <a href="#">Правила</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Стоимость</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Анкета</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">FAQ</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Партнеры</a>
            </li>
          </ul>
        </li>
        <li class="footer-navigation-topic">
          <h2>Услуги</h2>
          <ul class="footer-navigation">
            <li class="footer-navigation-item">
              <a href="#">Аренда яхты</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Свадьба на яхте</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">День рождения</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Бизнес-встречи</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Прогулки</a>
            </li>
          </ul>
        </li>
        <li class="footer-navigation-topic">
          <h2>Регаты</h2>
          <ul class="footer-navigation">
            <li class="footer-navigation-item">
              <a href="#">Корпоративные регаты</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Календарь мероприятий</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Стать участником</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Результаты регат</a>
            </li>
            <li class="footer-navigation-item">
              <a href="#">Обучение</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>;
}