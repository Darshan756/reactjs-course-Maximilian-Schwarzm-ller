import Input from "./Input";
import { isEmail,isNotEmpty,hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
const {
  value: emailValue, 
  handleInputBlur: handleEmailBlur, 
  handleInputChange: handleEmailChange,
  hasError:emailHasError
   } = useInput('',(value) => {
  return isEmail(value) && isNotEmpty(value)
})

 const {value:passwordValue, 
  handleInputBlur:handlePasswordBlur,
  handleInputChange:handlePasswordChange,
  hasError:passwordHasError
  }  
  =useInput('',(value) => hasMinLength(value , 6) )

function handleSubmit(e) {
    e.preventDefault();

    /* const isEmailInvalid = !loginData.email.includes('@');
    const isPasswordInvalid = loginData.password.trim().length < 6;
 */
    if (emailHasError || passwordHasError) {
      return;
    }

    alert('Successfully Logged In!');
    console.log(`Email: ${emailValue}, Password: ${passwordValue}`);
  }

  function handleReset() {
    setLoginData({ email: '', password: '' });
    setDidEdit({ email: false, password: false });
    setSubmittedEmailInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError &&
            'Please enter a valid email'
          }
        />

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={
            passwordHasError&&
            'Password must be at least 6 characters'
          }
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat" onClick={handleReset}>Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
