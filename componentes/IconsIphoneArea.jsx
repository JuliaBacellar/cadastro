import React from 'react';
 
function IconsIphoneArea() {
  return (
<header className="icons-iphone-area">
<time">9:41</time>
<div className="status-icons">
<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ab111f254a3ee82485a494a41d7bc587e9233dcf98ad255866c1469b950b73?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173" alt="" className="status-icon" />
<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c37f0105a843816567333dfc749015fb98118f7c9d87857d8aec37e1ca25d95?placeholderIfAbsent=true&apiKey=6eabfbbabfb14638888d9e6483000173" alt="" className="status-icon wifi" />
<img src="http://_3-" alt="" className="status-icon" />
</div>
<style jsx>{`
        .icons-iphone-area {
          position: absolute;
          z-index: 1;
          display: flex;
          width: 430px;
          align-items: center;
          justify-content: space-between;
          right: 0;
          top: 0;
          padding: 5px 25px;
        }
        .time {
          color: #1f2024;
          font: 600 15px Inter, sans-serif;
          letter-spacing: -0.17white-space: nowrap;
        }
        .status-icons {
          display: flex;
          align-items: center;
          gap: 7px;
          width: 68px;
        }
        .status-icon {
          aspect-ratio: 1.7;
          object-
          width: 17px;
          fill: #1f2024;
        }
        .wifi {
          aspect-ratio: 1.36;
          width: 19px;
        }
      `}</style>
</header>
  );
}
 
export default IconsIphoneArea;