import React, { useEffect } from "react";
import gal_1 from "../../img/gallery-photo-1.jpg";
import gal_2 from "../../img/gallery-photo-2.jpg";
import gal_3 from "../../img/gallery-photo-3.jpg";
import gal_4 from "../../img/gallery-photo-4.jpg";

export const Gallery = () => {
  useEffect(() => {
    let mainImage = document.querySelector(".active-photo");
    let previews = document.querySelectorAll(".preview-list li a");

    for (let preview of previews) {
      preview.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = preview.href;

        let currentActive = document.querySelector(
          ".preview-list li .active-item",
        );
        currentActive.classList.remove("active-item");
        preview.classList.add("active-item");
      };
    }
  }, []);
  return (
    <section class="gallery">
      <h2>Галерея</h2>
      <div class="slider">
        <img class="active-photo" src={gal_4} width="970" height="690" alt="" />
        <ul class="preview-list">
          <li>
            <a href="img/gallery-photo-1.jpg">
              <img src={gal_1} width="170" height="150" alt="" />
            </a>
          </li>
          <li>
            <a href="img/gallery-photo-2.jpg">
              <img src={gal_2} width="170" height="150" alt="" />
            </a>
          </li>
          <li>
            <a href="img/gallery-photo-3.jpg">
              <img src={gal_3} width="170" height="150" alt="" />
            </a>
          </li>
          <li>
            <a href="img/gallery-photo-4.jpg" class="active-item">
              <img src={gal_4} width="170" height="150" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
