import styles from "../styles/WelcomeMsg.module.css";
import Image from "next/image";
import { Button, Col } from "react-bootstrap";
import Link from "next/link";
const welcomeMsg = () => {
  return (
    <div className={"text-center mt-4"}>
      <h1 className={styles.text}>Bienvenue !</h1>
      <p className={styles.text}>
        Cette application a été spécialement conçue pour aider les étudiants de l'ISIMA à
        calculer facilement et efficacement leurs notes grâce à une interface
        conviviale,L'objectif principal de cette application est de simplifier le
        processus de calcul des notes pour les étudiants. <br></br>Choisissez la licence
        que vous souhaitez calculer dans la barre de navigation du site web.
        <br></br>Ce projet a été réalisé par : <b>Ahmed klabi</b>
      </p>
      <a href="https://github.com/ahmedkltn">
        <Image className="m-2" src="/github.png" alt="github" width={50} height={50} />
      </a>
      <Col className="d-flex justify-content-center mb-4">
        <Link href={"LBC"} passHref legacyBehavior>
          <Button className="m-2" variant="secondary">
            Business Computing
          </Button>
        </Link>
        <Link href={"LCS"} passHref legacyBehavior>
          <Button className="m-2" variant="secondary">
            Computer Science
          </Button>
        </Link>
        <Link href={"LCE"} passHref legacyBehavior>
          <Button className="m-2" variant="secondary">
            Computer Engineering
          </Button>
        </Link>
      </Col>
    </div>
  );
};
export default welcomeMsg;
