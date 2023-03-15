import styles from "../styles/WelcomeMsg.module.css";
import Image from "next/image";
export default () =>{
    return (
      <div className={"text-center mt-4"}>
        <h1 className={styles.text}>Bienvenue !</h1>
        <p className={styles.text}>
          Cette application a été spécialement conçue pour aider les étudiants de l'ISIMA
          à calculer facilement et efficacement leurs notes grâce à une interface
          conviviale, car l'université ne fournit pas de calcul de note moyenne.
          L'objectif principal de cette application est de simplifier le processus de
          calcul des notes pour les étudiants.
          <br></br>Ce projet a été réalisé par : <b>Ahmed klabi</b>
        </p>
        <a href="https://github.com/ahmedkltn">
          <Image className="m-2" src="/github.png" alt="github" width={50} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-klabi-168265217/">
          <Image
            className="m-2"
            src="/linkedin.png"
            alt="linkedin"
            width={50}
            height={50}
          />
        </a>
      </div>
    );
}