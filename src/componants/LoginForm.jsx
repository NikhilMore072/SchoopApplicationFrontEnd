import { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Css/LoginForm.module.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      if (!emailRegex.test(name) && !phoneRegex.test(name)) {
        newErrors.name = 'Please enter a valid email or phone number';
      }
    }
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await axios.post('https://your-api-endpoint.com/login', {
          name,
          password,
        });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        console.log('Login successful, token saved to localStorage:', token);
        // Redirect to another page or perform further actions added
        
      } catch (error) {
        console.error('Login failed:', error.response.data);
        setErrors({ api: 'Login failed. Please check your credentials and try again.' });
      }
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign in</h2>
      <p>Hey, Enter your details to login to your account</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter Email/ Phone number"
              required
            />
          </div>
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.eyeIcon}
              onClick={toggleShowPassword}
            />
          </div>
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        {errors.api && <span className={styles.error}>{errors.api}</span>}
        <button type="submit">Login</button>
        <div className={styles.formFooter}>
          <span>Don't have an account? </span>
          <a href="#" className={styles.register}>
            Register Now
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
