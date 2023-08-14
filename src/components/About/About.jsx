import styles from "./About.module.css";
import foto from "../../Images/about/Imagen1.png";
import GMAIL_LOGO from "../../Images/about/gmail.png";
import LINKEDIN_LOGO from "../../Images/about/linkedin.png";
import GITHUB_LOGO from "../../Images/about/github-icon.png";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBox}>
        <div>
          <div className={styles.divFoto}>
            <img src={foto} alt="Foto presentacion" className={styles.foto} />
          </div>
          <div className={styles.allTextContainer}>
            <div className={styles.basicInfo}>
              <h1 className={styles.name}>Miguel Angel Gallego Gaviria</h1>
              <h2 className={styles.title}>Desarrollador Web</h2>
            </div>
            <div className={styles.description}>
              <p>
                 Hola, soy un desarrollador web Full-Stack de Colombia amante de
                los retos y la creación de código rápido y eficiente que
                solucione problemas complejos. <br /> Soy un fanático de la
                tecnología, apasionado del aprendizaje y entusiasta del código,
                que siempre está buscando nuevos horizontes y metas que
                alcanzar.
              </p>
              <p className={styles.invitation}>
                <i>Esta página web es solo una pequeña muestra de mis habilidades
                como desarrollador, si quieres conoces más de mi o mis
                habilidades te invito a explorar los siguientes links:</i>
              </p>
            </div>
            <div className={styles.links}>
              <a href="https://github.com/Multichiki22" target="blank" >
                <img
                  src={GITHUB_LOGO}
                  alt="Logo de github"
                  className={styles.logo}
                />
              </a>
              <a href="https://www.linkedin.com/in/miguel-angel-gallego-gaviria-56288a23b/"  target="blank">
                <img
                  src={LINKEDIN_LOGO}
                  alt="Logo de Linkedin"
                  className={styles.logo}
                />
              </a>
              <a href="mailto:myguelangel12@gmail.com"  target="blank">
                <img
                  src={GMAIL_LOGO}
                  alt="Logo de gmail"
                  className={styles.logo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
