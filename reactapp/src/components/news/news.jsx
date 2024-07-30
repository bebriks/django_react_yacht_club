import news_photo from "../../img/news-photo.jpg";
import author from "../../img/author.jpg";
import share from "../../img/share.svg";

export const News = () => {
  return (
    <section class="news">
      <h2>Новости</h2>
      <article class="post">
        <figure class="post-img">
          <img
            src={news_photo}
            width="770"
            height="301"
            alt="Человек в форме моряка на морском судне"
          />
          <figcaption>Победитель регаты шкипер Иван Кулешов</figcaption>
        </figure>
        <div class="post-content">
          <h3>Итоги регаты Sochi Race Week 2020</h3>
          <p>
            Свыше сотни участников собирались на побережье Сочи, чтобы
            посоревноваться за главный приз. В соревнованиях приняли участие как
            новички, так и <del>профессионалы</del> <ins>моряки</ins>, имеющие
            за плечами немалый опыт.
          </p>
          <p>
            На протяжении всего плавания нас сопровождало солнце прекрасная
            погода, в отдельные дни ветер до 20 узлов. Регата была прекрасно
            организована, 135 яхтсменов, 7 экипажей, 9 стран участниц, 4
            гоночных дня, 3 дивизиона.
          </p>
          <h4>Команды-участники:</h4>
          <ul>
            <li>Восток 35</li>
            <li>Fortune Sailing</li>
            <li>Сибирь</li>
            <li>Левиафан</li>
            <li>Черный лебедь</li>
            <li>White Pepper</li>
            <li>Pearl</li>
          </ul>
          <p>
            Чемпионом регаты Sochi Race Week 2020 стала команда Fortune Sailing,
            в прошлом году остановившаяся в одном шаге от победы, а в этом
            сезоне опередившая ближайшего соперника — экипаж «Восток 35» — на{" "}
            <del>12 баллов</del> <ins>5 баллов</ins>.
          </p>
          <blockquote>
            Мы в команде очень дружны и понимаем друг друга без слов, думаю,
            поэтому мы и победили
          </blockquote>
          <p>
            Поздравляем победителей и ждем все участников снова на осенних
            регатах!
          </p>
        </div>
        <footer class="post-footer">
          <img
            class="post-author-img"
            src={author}
            width="60"
            height="60"
            alt="Артем Колесников"
          />
          <p class="post-meta">
            <a href="#">Артем Колесников</a>
            <time datetime="2021-06-20">20.06.2021</time>
          </p>
          <a class="post-share" href="#">
            <img src={share} width="26" height="26" alt="Поделиться" />
          </a>
        </footer>
      </article>
    </section>
  );
};
