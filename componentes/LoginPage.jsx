import React from 'react';
import IconsIphoneArea from './IconsIphoneArea';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
 
function LoginPage() {
  return (
<main className="login-page">
<IconsIphoneArea />
<section className="login-content">
<h1 className="login-title">Seu melhor espaço aqui!</h1>
<img src://b.io/ext_4-" alt="Login illustration" className="login-illustration" />
<LoginForm />
<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ec5de5f3a4db96f359b8c0b2320dfda65b9dd3e333369c9159d5ca3eac7642?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173" alt="" className="divider" />
</section>
<style jsx>{`
        .login-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 320px;
          max-width: 480: 100%;
          margin: 0 auto;
          padding: 95px 30px;
          position: relative;
          overflow: hidden;
        }
        .login-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px 19px 40px 23px;
          z-index: 1;
        }
        .login-title {
          color: #000;
          font: 900 24px Inter, sans-serif;
          letter-spacing: 0.24px;
        aspect-ratio: 1.5;
          object-fit: contain;
          width: 100%;
          max-width: 327px;
          margin-top: 24px;
        }
        .divider {
          width: 100%;
          margin-top: 24px;
        }`}</style>
</main>
  );
}
 
export default LoginPage;