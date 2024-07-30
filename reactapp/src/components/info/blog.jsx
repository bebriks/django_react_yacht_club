import React, { useEffect } from "react";
import blog_1 from "../../img/blog-photo-1.jpg";
import blog_2 from "../../img/blog-photo-2.jpg";

export const Blog = () => {
  useEffect(() => {
    const blogArticles = document.querySelectorAll(".blog-article");

    const handleMoreButtonClick = (blogArticle, moreButton) => {
      if (blogArticle.classList.contains("short")) {
        blogArticle.classList.remove("short");
        moreButton.textContent = "Скрыть";
        moreButton.style.display = "inline-block";
      } else {
        blogArticle.classList.add("short");
        moreButton.textContent = "Читать дальше";
        moreButton.style.display = "inline-block";
      }
    };

    blogArticles.forEach((blogArticle) => {
      const moreButton = blogArticle.querySelector(".more");
      const boundHandleMoreButtonClick = () =>
        handleMoreButtonClick(blogArticle, moreButton);

      moreButton.addEventListener("click", boundHandleMoreButtonClick);

      // Cleanup event listeners on component unmount
      return () => {
        moreButton.removeEventListener("click", boundHandleMoreButtonClick);
      };
    });
  }, []);

  return (
    <div>
      <article className="blog-article blog-article-1 short">
        <div className="blog-article-content">
          <p className="blog-article-date">
            <time dateTime="2021-10-20">20 октября</time> -{" "}
            <time dateTime="2021-04-19">19 апреля</time>
          </p>
          <h2>Стань частью команды</h2>
          <p className="blog-article-description">
            Если вы давно хотели попробовать себя в яхтинге – сейчас самое
            лучшее время! Мы набираем команду будущих шкиперов. За 6 вы станете
            настоящим капитаном и уже в следующем сезоне сможете самостоятельно
            выйти в море!
          </p>
          <button className="more" type="button">
            Читать дальше
          </button>
        </div>
        <img
          className="blog-article-img"
          src={blog_1}
          width="600"
          height="262"
          alt="Мужчина на яхте смотрит в бинокль"
        />
      </article>
      <article className="blog-article blog-article-2 short">
        <div className="blog-article-content">
          <p className="blog-article-date">
            <time dateTime="2021-07-16">16 июля</time> -{" "}
            <time dateTime="2021-07-23">23 июля</time>
          </p>
          <h2>Рожденные в воде</h2>
          <p className="blog-article-description">
            Подарите детям настоящее приключение! День с морскими пиратами на
            корабле – это лучшая команда, веселые аниматоры, игры, соревнования,
            работа в команде и, конечно, море!
          </p>
          <button className="more" type="button">
            Читать дальше
          </button>
        </div>
        <img
          className="blog-article-img"
          src={blog_2}
          width="600"
          height="252"
          alt="Дети и взрослые на яхте"
        />
      </article>
    </div>
  );
};
