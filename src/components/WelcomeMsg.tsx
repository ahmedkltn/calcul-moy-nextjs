import styles from "../styles/WelcomeMsg.module.css";
import Image from "next/image";
export default () =>{
    return (
      <div className={"text-center mt-4"}>
        <h1 className={styles.text}>Welcome !</h1>
        <p className={styles.text}>
          This application has been specifically designed to help ISIMA students calculate
          their grades easily and efficiently through a user-friendly interface, as the
          university does not provide an average grade calculation. The main objective of
          this app is to simplify the process of calculating grades for the students.
          <br></br>This project was made by : <b>Ahmed klabi</b>
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