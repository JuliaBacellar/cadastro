import React from 'react';
 
function SocialLogin() {

  const socialButtons = [

    { name: 'Facebook', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c84b2209ad10715c3c8440a8f08dbde57a716ca49a1ba46d3b1834aad3ad1075?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173', bgColor: '#006ffd' },

    { name: 'Google', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e73ad75ad64b2d10c34328cf9f804c927fe0f5ee8a2804afb3455d62654acb41?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173', bgColor: '#ed3241' },

    { name: 'Apple', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f49db103b9dad28addaef87b45dd5df581327be183a2e70a0d7c6d464b66ae36?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173', bgColor: '#1f2024' }

  ];
 
  return (
<section className="social-login">
<p className="social-login-text">Ou continuar com</p>
<div className="social-buttons">

        {socialButtons.map((button, index) => (
<button key={index} className="social-button" style={{ backgroundColor: button.bgColor }}>
<img src={button.src} alt={`Login with ${button.name}`} className="social-icon" />
</button>

        ))}
</div>
<style jsx>{`

        .social-login {

          display: flex;

          flex-direction: column;

          align-items: center;

          margin-top: 24px;

        }

        .social-login-text {

          color: #71727a;

          font: 400 12px/1 Inter, sans-serif;

          letter-spacing: 0.12px;

          margin-bottom: 16px;

        }

        .social-buttons {

          display: flex;

          gap: 12px;

        }

        .social-button {

          display: flex;

          justify-content: center;

          align-items: center;

          width: 40px;

          height: 40px;

          border-radius: 50%;

          border: none;

          cursor: pointer;

        }

        .social-icon {

          width: 12px;

          height: 12px;

        }

      `}</style>
</section>

  );

}
 
export default SocialLogin;
 