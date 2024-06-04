import Login from './LoginForm';
import styles from "../Css/LoginParent.module.css";
import { Notification } from './Notification';
// this is landing page
const Login= () => {
  return (
    <div className={styles.loginContainer}>
    <div  className={styles.loginContainerChild}>
      <Login />
      <Notification/>

    </div>
    </div>
  
  );
};

export default Login;
