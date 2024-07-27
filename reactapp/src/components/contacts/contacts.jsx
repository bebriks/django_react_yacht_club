import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import instagram from '../../img/instagram.svg';
import map from '../../img/map.png'

export const Contacts = () => {
    return <section class="contacts">
    <div class="contacts-content">
      <h2>Контакты</h2>
      <ul class="contact-items">
        <li class="contact-item">
          <h3>Адрес:</h3>
          <address>г. Сочи, ул. Бзугу, 9</address>
        </li>
        <li class="contact-item">
          <h3>Телефон:</h3>
          <a href="tel:+7622620563">8 (622) 62-05-63</a>
        </li>
        <li class="contact-item">
          <h3>E-mail:</h3>
          <a href="mailto:yachtclub-sochi@mail.ru">yachtclub-sochi@mail.ru</a>
        </li>
        <li class="contact-item">
          <h3>Мы в социальных сетях:</h3>
          <ul class="social-list">
            <li class="social-item">
              <a href="#">
                <img src={facebook} alt="Facebook" width="9" height="16"/>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <img src={twitter} alt="Twitter" width="18" height="16"/>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <img src={instagram} alt="Instagram" width="18" height="18"/>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <img class="contacts-img" src={map} width="670" height="351" alt="Карта с адресом яхт клуба"/>
  </section>
}