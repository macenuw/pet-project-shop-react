import aboutBg from "../../images/about/about-bg.jpg";
import "./about.scss";
const About = () => {
  return (
    <section className="about">
      <div className="about__inner container">
        <div className="about__img-inner">
          <picture>
            <source />
            <img src={aboutBg} alt="" className="about__img" />
          </picture>
        </div>
        <div className="about__content">
          <h2 className="about__title title">Наши преимущества</h2>
          <div className="about__items">
            <div className="about__item">
              <span className="about__decor">01</span>
              <p className="about__text">Только качественные материалы</p>
            </div>
            <div className="about__item">
              <span className="about__decor">02</span>
              <p className="about__text">Все сотрудники с опытом более 5 лет</p>
            </div>
            <div className="about__item">
              <span className="about__decor">03</span>
              <p className="about__text">Современное оборудование</p>
            </div>
            <div className="about__item">
              <span className="about__decor">04</span>
              <p className="about__text">
                Проверка изделий на всех этапах производства
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
