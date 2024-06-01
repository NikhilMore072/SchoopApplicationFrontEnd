import LandingPage from './LoginForm';
import styles from "../Css/LoginParent.module.css";
import { Notification } from './Notification';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
    <div  className={styles.loginContainerChild}>
      <LandingPage />
      <Notification/>

    </div>
    </div>
 
  );
};

export default Login;
