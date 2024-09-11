import React from 'react';
 
function LoginForm() {

  return (
<form className="login-form">
<div className="form-field">
<label htmlFor="email" className="visually-hidden">Endereço de Email</label>
<input type="email" id="email" classNameEndereço de Email" />
</div>
<div className="form-field">
<label htmlFor="password" className="visually-hidden">Senha</label>

        d" id="password" className="input-field" placeholder="Senha" />
<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa2befc68db5c30993e08ebb2114fb95a366658e1e5b9b410715a7369a151a68?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173" alt="Show password" className="toggle-password" />
</div>
<a href="#" className="forgot-password">Esqueceu a senha?</a>
<button type="submit" className="login-button">Login</button>
<p className="register-prompt">

        Não é registrado? <a href="#" className="register-link">Registra-se agora</a>
</p>
<style jsx>{`

        .login-form {

          display: flex;

          flex-direction: column;

          width: 100%;

          max-width: 327px;

          font-family: Inter, sans-serif;

        }

        .form-field {

          position: relative;

          margin-bottom: 16px;

        }

        .input-field {

          width: 100%;

          min-height: 48px;

          border-radius: 12px;

          border: 1px solid #c5c6cc;

          padding: 14px 16px;

          font-size: 14px;

          color: #8f9098;

        }

        .toggle-password {

          position: absolute;

          right: 16px;

          top: 50%;

          transform: translateY(-50%);

          width: 16px;

          height: 16px;

          cursor: pointer;

        }

        .forgot-password {

          align-self: flex-start;

          font-size: 12px;

          font-weight: 600;

          color: #8f9098;

          text-decoration: none;

          margin-bottom: 24px;

        }

        .login-button {

          width: 100%;

          min-height: 48px;

          border-radius: 12px;

          background-color: #263238;

          color: #fff;

          font-size: 12px;

          font-weight: 600;

          border: none;

          cursor: pointer;

        }

        .register-prompt {

          font-size: 12px;

          font-weight: 400;

          color: #71727a;

          text-align: center;

          margin-top: 16px;

        }

        .register-link {

          color: #263238;

          font-weight: 600;

          text-decoration: none;

        }

        .visually-hidden {

          position: absolute;

          width: 1px;

          height: 1px;

          padding: 0;

          margin: -1px;

          overflow: hidden;

          clip: rect(0, 0, 0, 0);

          white-space: nowrap;

          border: 0;

        }

      `}</style>
</form>

  );

}
 
export default LoginForm;
 
SocialLogin.jsx
 