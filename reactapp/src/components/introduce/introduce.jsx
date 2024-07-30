import main_photo_1 from "../../img/main-photo-1.jpg";

export const Introduce = () => {
  return (
    <section class="hero">
      <h1>Вместе под парусом</h1>
      <img
        src={main_photo_1}
        width="1170"
        height="466"
        alt="Парусное судно на закате"
      />
    </section>
  );
};
